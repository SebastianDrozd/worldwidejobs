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
        }),
        getJobsByBusinessId : builder.query({
            query: (businessId) => ({
                url : `/jobs/${businessId}`,   
                method : 'GET'
            }),

        }),
        getJobPostSearch : builder.query({
            query: (searchQuery) => ({
                url : `/jobs/search/query?${searchQuery}`,
                method : 'GET'
            })
        }),
        getJobTitles : builder.mutation({
            query: (formData) => ({
                url : '/jobs/titles',
                method : 'POST',
                body : formData     
    
        })
    }),
    }),
});
export const {useCreateJobPostMutation,useGetJobPostsQuery,useGetJobsByBusinessIdQuery,useGetJobPostSearchQuery,useGetJobTitlesMutation} = jobPostApiSlice;