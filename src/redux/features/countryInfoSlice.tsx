import { createSlice, createSelector, PayloadAction } from "@reduxjs/toolkit";

interface CountryInfo {
  countryList: Array<any>;
  status: string;
  isLoading: boolean;
  error?: string;
}

const initialState = {
  countryList: [],
  status: "PENDING",
  isLoading: true,
  error: "",
} as CountryInfo;

const countryInfoSlice = createSlice({
  name: "countryInfo",
  initialState,
  reducers: {
    countyInfoLoading(state) {
      state.status = "Pending";
    },
    countyInfoSuccess(state, action: PayloadAction<any[]>) {
      state.isLoading = false;
      state.countryList = action.payload;
    },
    countyInfoFailure(state, action: PayloadAction<string>) {
      state.isLoading = false;
      state.error = action.payload;
    },
  },
});

export const { countyInfoLoading, countyInfoSuccess, countyInfoFailure } =
  countryInfoSlice.actions;

export default countryInfoSlice.reducer;
