import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { apiSlice } from '../api/apiSlice';

export const userApiSlice = apiSlice.injectEndpoints({
    endpoints: (builder) => ({
        getUserInformation: builder.query({
            query: (email) => `users/${email}`,
        }),
    }),
});
export const { useGetUserInformationQuery } = userApiSlice;