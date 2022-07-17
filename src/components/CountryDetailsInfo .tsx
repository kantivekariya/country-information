import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { fetchCountryInfoDetails } from "../redux/action/countryInfoAction";

const CountryDetailsInfo = () => {
  const { countryCode } = useParams<string>();
  const dispatch = useDispatch<any>();
  const { countryDetailsInfo } = useSelector(
    (state: any) => state.countryInfoDetails
  );

  useEffect(() => {
    dispatch(fetchCountryInfoDetails(countryCode));
  }, [dispatch, countryCode]);

  return (
    <>
      <h1>{countryCode}</h1>
    </>
  );
};

export default CountryDetailsInfo;
