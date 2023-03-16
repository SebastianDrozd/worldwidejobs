import {createSlice} from '@reduxjs/toolkit';

const authSlice = createSlice({
    name: 'auth',
    initialState: { user: null, token: null,type:null },
    reducers: {
        setCredentials : (state, action) => {
            console.log("this is action payload in the setcredentials",action.payload)
            state.user = action.payload.user;
            state.token = action.payload.token;
            state.type = action.payload.type
        },
        logOut: (state,action) => {
            state.user = null;
            state.token = null;
            state.type = null;
        }
    },
});
export const { setCredentials, logOut } = authSlice.actions;
export default authSlice.reducer;
export const selectCurrentUser = state => state.auth.user;
export const selectCurrentToken = state => state.auth.token;