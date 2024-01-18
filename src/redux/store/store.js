import { combineReducers, configureStore } from "@reduxjs/toolkit";
import StateReducer from "../reducers/firstFetch";
import secondFetch from "../reducers/secondFetch";
import loaderReducer from "../reducers/loaderReducer";

import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import { encryptTransform } from "redux-persist-transform-encrypt";

/* configurazione del PERSIST STORE */

// 1. FILE DI CONFIGURAZIONE DEL PERSISTENT STORE ( SALVARE I REDUCERS DEL PROGETTO SUL LOCAL STORAGE )
const persistConfig = {
    key: "root",
    storage: storage,
    transforms: [
        encryptTransform({
            secretKey: "sono_una_chiave_segreta_123", // crea il tuo file .env.local in cui creare la chiave REACT_APP_PERSIST_KEY col valore di una stringa complessa che
            // verrà usata come chiave di cripatzione dello store salvato nel localStorage del browser
        }),
    ],
    //  QUAL'ORA NON VOLESSI SALVARE UN REDUCER NEL LOCAL STORAGE DEL BROWSER USA LA BLACKLIST
    /* blacklist: ["secondFetch"], */
};

// 2. NUOVO STORE CONFIGURATO
const BigReducer = combineReducers({
    datoPrimaFetch: StateReducer, // null
    secondFetch: secondFetch, // null
    booleanValue: loaderReducer, // true
});

/* Questa variabile conterrà tutti i reducers ( che contengono actions e stati ) del progetto  */
const PersistentReducer = persistReducer(persistConfig, BigReducer);

export const store = configureStore({
    reducer: PersistentReducer,
    middleware: (getDefaultMiddleware) => getDefaultMiddleware({ serializableCheck: false }),
});

export const persistor = persistStore(store);

/* VECCHIO STORE SENZA PERSIST DEL LOCAL STORAGE  */
/* export const store = configureStore({
    reducer: {
        datoPrimaFetch: StateReducer, // null
        secondFetch: secondFetch, // null
        booleanValue: loaderReducer, // true
    },
});

export default store; */
