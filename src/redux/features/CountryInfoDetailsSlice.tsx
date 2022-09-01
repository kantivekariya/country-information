import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface CountryDetailsInfo {
  countryDetailsInfo: Array<any>;
  status: string;
  isLoading: boolean;
  error?: string;
}

const initialState = {
  countryDetailsInfo: [],
  status: "Pending",
  isLoading: true,
  error: "",
} as CountryDetailsInfo;

const countryInfoDetailsSlice = createSlice({
  name: "CountryDetailsInfo",
  initialState,
  reducers: {
    countyInfoDetailsLoading(state) {
      state.status = "Pending";
    },
    countyInfoDetailsSuccess(state, action: PayloadAction<any[]>) {
      state.isLoading = false;
      state.status = "Success";
      state.countryDetailsInfo = action.payload;
    },
    countyInfoDetailsFailure(state, action: PayloadAction<string>) {
      state.isLoading = false;
      state.status = "Failed";
      state.error = action.payload;
    },
  },
});

export const {
  countyInfoDetailsLoading,
  countyInfoDetailsSuccess,
  countyInfoDetailsFailure,
} = countryInfoDetailsSlice.actions;

export default countryInfoDetailsSlice.reducer;
