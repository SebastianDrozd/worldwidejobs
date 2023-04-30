import { apiSlice } from "./api/apiSlice";

export const jobApplicationApiSlice = apiSlice.injectEndpoints({
    endpoints: (builder) => ({
        submitJobApplication: builder.mutation({
            query: (jobApplication) => ({
                url: "jobApplications",
                method: "POST",
                body: jobApplication,
            }),
        }),
        getUserJobApplications : builder.query({
            query: (userId) => ({
                url: `jobApplications/users/${userId}`,
                method: "GET",  
            }),
        }),
        getBusinessJobApplications : builder.query({
            query: (businessId) => ({
                url: `jobApplications/business/${businessId}`,
                method: "GET",
            }),
            providesTags: ['Applications'],
        }),
        getJobApplicationDetails : builder.query({
            query: (applicationId) => ({
                url: `jobApplications/${applicationId}`,
                method: "GET",
            }),
        }),
        changeApplicationViewedStatus : builder.mutation({
            query: (applicationId) => ({
                url: `jobApplications/${applicationId}/viewed`,
                method: "POST",  
            }),
            invalidatesTags: ['Applications'],
        }),
    }),
});
export const { useSubmitJobApplicationMutation,useGetUserJobApplicationsQuery,useGetBusinessJobApplicationsQuery,useGetJobApplicationDetailsQuery ,useChangeApplicationViewedStatusMutation } = jobApplicationApiSlice;