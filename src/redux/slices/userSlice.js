import { createSlice } from '@reduxjs/toolkit'

export const userSlice = createSlice({
  name: 'user',
  initialState: {
    id : null,
    firstName : null,
    lastName : null,
    email : null,
    phoneNumber : null,
    address : null,
    
  },
  reducers: {
    setUserState: (state,action) => {
      state.id = action.payload.id;
      state.firstName = action.payload.firstName;
      state.lastName = action.payload.lastName;
      state.email = action.payload.email;
      state.phoneNumber = action.payload.phoneNumber;
      state.address = action.payload.address;
    }
  }
})

// Action creators are generated for each case reducer function
export const {setUserState } = userSlice.actions

export default userSlice.reducer