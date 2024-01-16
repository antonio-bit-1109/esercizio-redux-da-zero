import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const fetchData2 = createAsyncThunk("mainState/fetchSomeData", (payload, thunkAPI) => {
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
    /* const paramOfFetch = thunkAPI.getState().mainState.firstState; */

    const url = `https://api.pexels.com/v1/search?query=${payload}`;

    fetch(url, optionsPexels)
        .then((fetchResponse) => {
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
            thunkAPI.dispatch(setDataSecondoFetch(fetchData));
        })
        .catch((error) => {
            thunkAPI.rejectWithValue({ error: error.message });
        });
});

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
