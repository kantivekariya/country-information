import { configureStore } from "@reduxjs/toolkit";
import countryInfoSlice from "../features/countryInfoSlice";

export default configureStore({
    reducer:{
        countryInfo: countryInfoSlice
    }
})