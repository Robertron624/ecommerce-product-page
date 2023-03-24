import { configureStore } from "@reduxjs/toolkit";
import productReducer from "./productSlice";
import { createWrapper } from "next-redux-wrapper";

const makeStore = () =>
    configureStore({
        reducer: {
            product: productReducer,
        },
        devTools: true,
    });

export const wrapper = createWrapper(makeStore);
