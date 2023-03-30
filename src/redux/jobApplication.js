import { apiSlice } from "./api/apiSlice";

export const jobApplicationApiSlice = apiSlice.injectEndpoints({
    endpoints: (builder) => ({
        submitJobApplication: builder.mutation({
            query: (jobApplication) => ({
                url: "jobApplications",
                method: "POST",
                body: jobApplication,
            }),
        })
    }),
});
export const { useSubmitJobApplicationMutation } = jobApplicationApiSlice;