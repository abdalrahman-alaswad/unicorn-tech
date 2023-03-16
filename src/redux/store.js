import { configureStore } from "@reduxjs/toolkit";
import unicornSlice from "./UnicornSlice";

const store = configureStore({
    reducer: {
        unicorn: unicornSlice
    },

})
export default store