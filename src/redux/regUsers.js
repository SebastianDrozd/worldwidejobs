import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { apiSlice } from '../redux/api/apiSlice';

export const regUserApiSlice = apiSlice.injectEndpoints({
    endpoints: (builder) => ({
        getUserProfileInfo: builder.query({
            query: (email) => `regUsers/${email}`,
        }),
        completeUserProfile: builder.mutation({
            query: (body) => ({
                url: `regUsers/completeProfile`,
                method: 'POST',
                body,
            }),
        }),
    }),
})
export const { useGetUserProfileInfoQuery,useCompleteUserProfileMutation } = regUserApiSlice;