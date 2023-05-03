
import { apiSlice } from '../redux/api/apiSlice';

export const regUserApiSlice = apiSlice.injectEndpoints({
    endpoints: (builder) => ({
       uploadUserResume: builder.mutation({
            query: (data) => ({
                url: `/resumes`,
                method: 'POST',
                body: data,
            }),
            invalidatesTags: ['Resumes'],

       }),
         getUserResumes: builder.query({
            query: (userId) => ({
                url: `/resumes/users/${userId}`,
                method: 'GET',
            }),
            providesTags: ['Resumes'],
         }),
         deleteUserResume: builder.mutation({
            query: (resumeId) => ({
                url: `/resumes/${resumeId}`,
                method: 'DELETE',
            }),
            invalidatesTags: ['Resumes'],
         }),
         editUserResume : builder.mutation({
            query: (data) => ({
                url: `/resumes/${data.resumeId}`,
                method: 'PUT',
                body: data,
            }),
            invalidatesTags: ['Resumes'],
         }),
    }),
})
export const { useUploadUserResumeMutation,useGetUserResumesQuery,useDeleteUserResumeMutation,useEditUserResumeMutation } = regUserApiSlice;