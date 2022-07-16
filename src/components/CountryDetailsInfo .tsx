import { Outlet, useParams } from "react-router-dom";

const CountryDetailsInfo = () => {
  const { countryCode } = useParams();
  return (
    <>
      <h1>{countryCode}</h1>
    </>
  );
};

export default CountryDetailsInfo;
