import axios, { AxiosResponse } from "axios";
import config from "../../config";
import {
  countyInfoFailure,
  countyInfoLoading,
  countyInfoSuccess,
} from "../features/countryInfoSlice";

export const fetchCountryInfoList = () => async (dispatch: any) => {
  dispatch(countyInfoLoading());
  try {
    const res = await axios.get<AxiosResponse<any, any>, any>(`${config.BASE_URL}/all`);
    dispatch(countyInfoSuccess(res.data));
  } catch (error) {
    dispatch(countyInfoFailure(error as string));
    return Promise.reject(error);
  }
};