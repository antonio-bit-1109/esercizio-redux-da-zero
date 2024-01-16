import { configureStore } from "@reduxjs/toolkit";
import StateReducer from "../reducers/StateReducer";

export const store = configureStore({
    reducer: {
        State: StateReducer,
    },
});

export default store;
