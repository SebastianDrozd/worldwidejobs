import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { apiSlice } from '../redux/api/apiSlice';

export const regUserApiSlice = apiSlice.injectEndpoints({
    endpoints: (builder) => ({
        getUserProfileInfo: builder.query({
            query: (email) => `regUsers/${email}`,
        })
    }),
})
export const { useGetUserProfileInfoQuery } = regUserApiSlice;