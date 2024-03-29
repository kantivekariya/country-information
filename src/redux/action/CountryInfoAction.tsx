import axios, { AxiosResponse } from "axios";
import config from "../../config";
import {
  countyInfoDetailsFailure,
  countyInfoDetailsLoading,
  countyInfoDetailsSuccess,
} from "../features/CountryInfoDetailsSlice";
import {
  countyInfoFailure,
  countyInfoLoading,
  countyInfoSuccess,
} from "../features/CountryInfoSlice";

export const fetchCountryInfoList = () => async (dispatch: any) => {
  dispatch(countyInfoLoading());
  try {
    const res = await axios.get<AxiosResponse<any, any>, any>(
      `${config.BASE_URL}/all`
    );
    dispatch(countyInfoSuccess(res.data));
  } catch (error) {
    dispatch(countyInfoFailure(error as string));
    return Promise.reject(error);
  }
};

export const fetchCountryInfoDetails =
  (countryCode: any) => async (dispatch: any) => {
    dispatch(countyInfoDetailsLoading());
    try {
      const res = await axios.get<AxiosResponse<any, any>, any>(
        `${config.BASE_URL}/alpha/${countryCode}`
      );
      dispatch(countyInfoDetailsSuccess(res.data?.[0]));
    } catch (error) {
      dispatch(countyInfoDetailsFailure(error as string));
      return Promise.reject(error);
    }
  };
