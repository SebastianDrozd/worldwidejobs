import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { apiSlice } from '../redux/api/apiSlice';

export const businessApiSlice = apiSlice.injectEndpoints({
    endpoints: (builder) => ({
        getBusinessInformation : builder.query({
            query: (id) => `business/${id}`,
        }),
        createBusiness : builder.mutation({
            query: (formData) => ({
                url: '/business',
                method: 'POST',
                body: formData
            }),
        }),
    }),
});
export const { useGetBusinessInformationQuery, useCreateBusinessMutation } = businessApiSlice;