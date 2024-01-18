/* import { setGenericBooleanOff } from "../reducers/firstFetch"; */

/* FETCH MODALE RIUTILIZZABILE   */
export const fetchData = (url, parametroOpzionale, options, action, lastAction) => async (dispatch) => {
    try {
        // Set to true before fetching
        const fetchResponse = await fetch(url + parametroOpzionale, options);

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

        dispatch(action(fetchData));

        /*  QUALCOSA DA FARE FINITA LA FETCH ?? */
        if (lastAction) {
            dispatch(lastAction());
        }
    } catch (error) {
        console.error("Error fetching data:", error);
    }
};
