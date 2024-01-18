import { setGenericBooleanOff, setDataPrimaFetch } from "../reducers/firstFetch";

export const fetchData = (url, parametroOpzionale) => async (dispatch) => {
    const optionsPexels = {
        method: "GET",
        headers: {
            Authorization: "7Ye7PHnNDdVmd43T5cthTwaF0I2AipmjtizxjFtVcXnzQIgCqJYlTLXP",
            "Content-type": "application/json",
        },
    };

    const url = `https://api.pexels.com/v1/search?query=${parametroOpzionale}`;

    try {
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

        dispatch(setDataPrimaFetch(fetchData));
        dispatch(setGenericBooleanOff());
    } catch (error) {
        console.error("Error fetching data:", error);
    }
};
