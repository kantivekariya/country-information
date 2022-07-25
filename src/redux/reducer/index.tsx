import { combineReducers } from "redux";
import countryInfoDetailsSlice from "../features/countryInfoDetailsSlice";
import countryInfoSlice from "../features/countryInfoSlice";

const rootReducer = combineReducers({
  countryInfo: countryInfoSlice,
  countryInfoDetails: countryInfoDetailsSlice,
});

export default rootReducer;
