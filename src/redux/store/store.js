import { configureStore } from "@reduxjs/toolkit";
import StateReducer from "../reducers/firstFetch";
import secondFetch from "../reducers/secondFetch";
import loaderReducer from "../reducers/loaderReducer";

export const store = configureStore({
    reducer: {
        datoPrimaFetch: StateReducer, // null
        secondFetch: secondFetch, // null
        booleanValue: loaderReducer, // true
    },
});

export default store;
