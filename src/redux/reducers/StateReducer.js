import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

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

export const fetchData = createAsyncThunk("mainState/fetchSomeData", async (payload, thunkAPI) => {
    const optionsPexels = {
        method: "GET",
        headers: {
            Authorization: "7Ye7PHnNDdVmd43T5cthTwaF0I2AipmjtizxjFtVcXnzQIgCqJYlTLXP",
            "Content-type": "application/json",
        },
    };

    const url = `https://api.pexels.com/v1/search?query=${payload}`;

    try {
        thunkAPI.dispatch(setGenericBooleanOff());
        thunkAPI.dispatch(setGenericBooleanOn());

        // Set to true before fetching
        const fetchResponse = await fetch(url, optionsPexels);

        if (!fetchResponse.ok) {
            if (fetchResponse.status > 400 && fetchResponse.status < 500) {
                if (fetchResponse.status === 429) {
                    throw new Error("429 INFAME PER TE TANTE COSE BRUTTE");
                } else {
                    throw new Error("STAI CAPPELLANDO , RIGUARDA QUELLO CHE HAI SCRITTO");
                }
            }
            if (fetchResponse.status > 500 && fetchResponse.status < 600) {
                throw new Error("SERVER SPOMPATO, NON FUNZIA??");
            }
        }

        const fetchData = await fetchResponse.json();

        thunkAPI.dispatch(setDataPrimaFetch(fetchData));
    } catch (error) {
        thunkAPI.rejectWithValue({ error: error.message });
    } finally {
        thunkAPI.dispatch(setGenericBooleanOff());
    }
});

export const { setDataPrimaFetch, setGenericBooleanOff, setGenericBooleanOn } = MainSlice.actions;
export default MainSlice.reducer;
