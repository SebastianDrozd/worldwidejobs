import { createSlice } from "@reduxjs/toolkit";

export const createJobPostSlice = createSlice({
    name: "createJobPost",
    initialState: {
        requirements : [],
    },
    reducers: {
        setJobRequirements: (state, action) => {
            state.requirements.push(action.payload);
        },
        setDeleteRequirements: (state, action) => {
            state.requirements.splice(action.payload, 1);
        }
    }
});

export const { setJobRequirements,setDeleteRequirements } = createJobPostSlice.actions;
export default createJobPostSlice.reducer;
