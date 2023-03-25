import { apiSlice } from '../redux/api/apiSlice';
export const locationFinderApiSlice = apiSlice.injectEndpoints({    
    endpoints: (builder) => ({
        getLocation : builder.mutation({
            query: (location) => ({
                url : `/location`,
                method : 'POST',
                body : location

            })  
        })
    }),
});
export const {useGetLocationMutation} = locationFinderApiSlice;