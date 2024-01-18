import { createSlice } from "@reduxjs/toolkit";

const SecondFetchSlice = createSlice({
    name: "SecondFetch",
    initialState: {
        dataSecondoFetch: null,
    },

    reducers: {
        setDataSecondoFetch: (state, action) => {
            state.dataSecondoFetch = action.payload;
        },
    },
});

export const { setDataSecondoFetch } = SecondFetchSlice.actions;
export default SecondFetchSlice.reducer;
