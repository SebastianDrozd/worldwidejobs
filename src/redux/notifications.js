
import { apiSlice } from '../redux/api/apiSlice';

export const notificationsApiSlice = apiSlice.injectEndpoints({
    endpoints: (builder) => ({
        getUserNotifications: builder.query({
            query: (userId) => ({
                url: `/notifications/${userId}`,
                method: 'GET',
            }),
        }),
    }),
});
export const { useGetUserNotificationsQuery } = notificationsApiSlice;