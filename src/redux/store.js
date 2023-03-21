import { configureStore } from '@reduxjs/toolkit'
import userReducer from './slices/userSlice'
import { apiSlice } from './api/apiSlice'
import authReducer from './auth/authSlice'
import businessReducer from './slices/businessSlice'
export default configureStore({
  reducer: {
    [apiSlice.reducerPath]: apiSlice.reducer,
    auth: authReducer,
    user: userReducer,
    business : businessReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(apiSlice.middleware),
      devTools: true
})