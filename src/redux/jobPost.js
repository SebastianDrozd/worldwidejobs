import { apiSlice } from '../redux/api/apiSlice';
export const jobPostApiSlice = apiSlice.injectEndpoints({
    endpoints: (builder) => ({
        createJobPost : builder.mutation({
            query: (formData) => ({
                url : '/jobs',
                method : 'POST',
                body : formData
            })
        }),
        getJobPosts : builder.query({
            query: () => ({
                url : '/jobs',
                method : 'GET'
            }),
        })
    }),

});
export const {useCreateJobPostMutation,useGetJobPostsQuery} = jobPostApiSlice;