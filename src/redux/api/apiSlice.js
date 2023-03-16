import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react';
import { setCredentials,logout, logOut } from '../auth/authSlice';

const baseQuery = fetchBaseQuery({
    baseUrl: 'http://localhost:4000/api/v1',
    credentials: 'include',
    prepareHeaders: (headers, { getState }) => {
        const token = getState().auth.token;
        if (token) {
            headers.set('authorization', `Bearer ${token}`);
        }
        return headers;
    }
});

const baseQueryWithReAuth = async (args, api, extraOptions) => {
    const result = await baseQuery(args, api, extraOptions);
    if (result.error) {
        if (result.error.originalStatus === 403) {
            console.log("sending refresh token")
            //send refresh token to get new access token
           const refreshResult = await baseQuery('/users/refresh',api,extraOptions);
              if (refreshResult.data) {
                const user = api.getState().auth.user;
                //store the new token
                api.dispatch(setCredentials({ user, token: refreshResult.data.token }));
                //retry the original request
                return baseQuery(args, api, extraOptions);
              }
              else{
                api.dispatch(logOut());
              }
        }
    }
    return result;
};

export const apiSlice = createApi({
    baseQuery: baseQueryWithReAuth,
    endpoints: (builder) => ({}),
});