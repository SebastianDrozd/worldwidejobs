import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { apiSlice } from '../redux/api/apiSlice';

export const regUserApiSlice = apiSlice.injectEndpoints({
    endpoints: (builder) => ({
        getUserProfileInfo: builder.query({
            query: (email) => `regUsers/${email}`,
            providesTags: ['regUsers'],
        }),
        completeUserProfile: builder.mutation({
            query: (body) => ({
                url: `regUsers/completeProfile`,
                method: 'POST',
                body,
            }),
        }),
        editUserProfile: builder.mutation({
            query: (body) => ({
                url: `regUsers`,
                method: 'PUT',
                body,
            }),
            invalidatesTags: ['regUsers'],
        }),
    }),
})
export const { useGetUserProfileInfoQuery,useCompleteUserProfileMutation,useEditUserProfileMutation } = regUserApiSlice;