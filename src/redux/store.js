import { configureStore } from '@reduxjs/toolkit'
import userReducer from './slices/userSlice'
import { apiSlice } from './api/apiSlice'
import authReducer from './auth/authSlice'
export default configureStore({
  reducer: {
    [apiSlice.reducerPath]: apiSlice.reducer,
    auth: authReducer,
    user: userReducer
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(apiSlice.middleware),
      devTools: true
})