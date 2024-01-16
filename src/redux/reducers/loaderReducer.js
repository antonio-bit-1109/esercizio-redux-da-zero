import { createSlice } from "@reduxjs/toolkit";

const booleanSlice = createSlice({
    name: "booleans",

    initialState: {
        isInLoading: true,
    },

    reducers: {
        setIsInLoading: (state, action) => {
            state.isInLoading = action.payload;
        },
    },
});

export const { setIsInLoading } = booleanSlice.actions;
export default booleanSlice.reducer;
