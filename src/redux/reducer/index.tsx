import { combineReducers } from "@reduxjs/toolkit";
import countryInfoDetailsSlice from "../features/CountryInfoDetailsSlice";
import countryInfoSlice from "../features/CountryInfoSlice";

const rootReducer = combineReducers({
  countryInfo: countryInfoSlice,
  countryInfoDetails: countryInfoDetailsSlice,
});

export default rootReducer;
