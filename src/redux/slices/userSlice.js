import { createSlice } from '@reduxjs/toolkit'

export const userSlice = createSlice({
  name: 'user',
  initialState: {
    id : null
  },
  reducers: {
    setUserState: (state,action) => {

      // Redux Toolkit allows us to write "mutating" logic in reducers. It
      // doesn't actually mutate the state because it uses the Immer library,
      // which detects changes to a "draft state" and produces a brand new
      // immutable state based off those changes
      state.id = action.payload.id
    }
  }
})

// Action creators are generated for each case reducer function
export const {setUserState } = userSlice.actions

export default userSlice.reducer