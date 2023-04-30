import { createSlice } from '@reduxjs/toolkit'

export const businessSlice = createSlice({
    name: 'business',
    initialState: {
        businessId: null,
        businessName: null,
        businessDescription: null,
        businessEmail: null,
        businessPhone: null,
        businessLogo: null,
        businessSize: null,
        businessIndustry: null,
        businessWebsite: null,
        business_user_id: null,
        businessLatitude: null,
        businessLongitude: null,
        address:{
            businessStreet: null,
            businessCity: null,
            businessStateProvince: null,
            businessPostalCode: null,
            businessCountry: null,
        }
    },

    reducers: {
        setBusinessState : (state, action) => {
          
            // Redux Toolkit allows us to write "mutating" logic in reducers. It
            // doesn't actually mutate the state because it uses the Immer library,
            // which detects changes to a "draft state" and produces a brand new
            // immutable state based off those changes
            state.address.businessStreet = action.payload.street
            state.address.businessCity = action.payload.city
            state.address.businessStateProvince = action.payload.state_province
            state.address.businessCountry = action.payload.country
            state.address.businessPostalCode = action.payload.postal_code
            state.businessId = action.payload.id

        }
    }
})
export const { setBusinessState } = businessSlice.actions
export default businessSlice.reducer;