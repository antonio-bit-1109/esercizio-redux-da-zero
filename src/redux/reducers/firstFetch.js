import { createSlice } from "@reduxjs/toolkit";

const MainSlice = createSlice({
    name: "mainState",
    initialState: {
        dataPrimaFetch: null,
        genericBoolean: true,
    },

    reducers: {
        setDataPrimaFetch: (state, action) => {
            state.dataPrimaFetch = action.payload;
        },
        setGenericBooleanOn: (state) => {
            state.genericBoolean = true;
        },
        setGenericBooleanOff: (state) => {
            state.genericBoolean = false;
        },
    },
});

export const { setDataPrimaFetch, setGenericBooleanOff, setGenericBooleanOn } = MainSlice.actions;
export default MainSlice.reducer;
