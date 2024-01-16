import { createSlice } from "@reduxjs/toolkit";

const MainSlice = createSlice({
    name: "mainState",
    initialState: {
        firstState: "",
    },

    reducers: {
        setFirstState: (state, action) => {
            state.firstState = action.payload;
        },
    },
});

export const { setFirstState } = MainSlice.actions;
export default MainSlice.reducer;
