import { createSlice } from "@reduxjs/toolkit";

/*  SLICE, FETTA CHE CONTIENE STATO/I E MODIFICATORI DELLO STATO (ACTIONS) */
const MainSlice = createSlice({
    name: "mainState",
    initialState: {
        dataPrimaFetch: null,
        genericBoolean: true,
    },

    /* QUESTE SONO LE ACTION  ACTIONS = I MIEI SETTER DI GONI SINGOLO STATO  */
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
