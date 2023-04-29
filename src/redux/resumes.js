
import { apiSlice } from '../redux/api/apiSlice';

export const regUserApiSlice = apiSlice.injectEndpoints({
    endpoints: (builder) => ({
       uploadUserResume: builder.mutation({
            query: (data) => ({
                url: `/resumes`,
                method: 'POST',
                body: data,
            })      
       }),
         getUserResumes: builder.query({
            query: (userId) => ({
                url: `/resumes/users/${userId}`,
                method: 'GET',
            }),
         }),
    }),
})
export const { useUploadUserResumeMutation,useGetUserResumesQuery } = regUserApiSlice;