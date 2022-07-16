import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { Outlet } from "react-router-dom";
import { fetchCountryInfoList } from "../redux/action/countryInfoAction";

const CountryInfo = () => {
  const dispatch = useDispatch<any>();
  useEffect(() => {
    dispatch(fetchCountryInfoList());
  }, [dispatch]);

  return (
    <>
      <h1>Home</h1>
      <Outlet />
    </>
  );
};

export default CountryInfo;
