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
        setGenericBoolean: (state, action) => {
            state.genericBoolean = action.payload;
        },
    },
});

export const fetchData = createAsyncThunk("mainState/fetchSomeData", (payload, thunkAPI) => {
    const optionsPexels = {
        method: "GET",
        headers: {
            Authorization: "7Ye7PHnNDdVmd43T5cthTwaF0I2AipmjtizxjFtVcXnzQIgCqJYlTLXP",
            "Content-type": "application/json",
        },
    };

    /* ti serve una stringa per fare la chiamata fetch da inserire come parametro? */
    /* 1- identifico il nome dello slice 
           2- prendo da dentro lo state il valore che voglio prendere  */
    /* PARAM DA INSERIRE NELLA URL DELLA FETCH  */

    const genericBoolean = thunkAPI.getState().State.genericBoolean;

    /* const booleanValue = thunkAPI.getState().booleanValue.isInLoading; */

    const url = `https://api.pexels.com/v1/search?query=${payload}`;

    fetch(url, optionsPexels)
        .then((fetchResponse) => {
            console.log(genericBoolean);
            console.log(fetchResponse);
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
            } else {
                return fetchResponse.json();
            }
        })
        .then((fetchData) => {
            /* salvo nello store usando il reducer dataprimafetch */

            thunkAPI.dispatch(setDataPrimaFetch(fetchData));
        })
        .catch((error) => {
            thunkAPI.rejectWithValue({ error: error.message });
        });
});

export const { setDataPrimaFetch, setGenericBoolean } = MainSlice.actions;
export default MainSlice.reducer;
