import { configureStore } from '@reduxjs/toolkit'
import userReducer from './slices/userSlice'
import { apiSlice } from './api/apiSlice'
import authReducer from './auth/authSlice'
import businessReducer from './slices/businessSlice'
import createJobPostReducer from './slices/createJobPostSlice'
export default configureStore({
  reducer: {
    [apiSlice.reducerPath]: apiSlice.reducer,
    auth: authReducer,
    user: userReducer,
    business : businessReducer,
    createJobPost : createJobPostReducer
   
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(apiSlice.middleware),
      devTools: true
})