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
            })
        })
    }),
});
export const { useSubmitJobApplicationMutation,useGetUserJobApplicationsQuery } = jobApplicationApiSlice;