import { Navigate, Route, Routes } from "react-router-dom";
import CountryDetailsInfo from "../components/CountryDetailsInfo ";
import CountryInfo from "../components/CountryInfo";
import Layout from "../layouts/Layout";

const MainRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Navigate to="country-info" />} />
        <Route path="country-info" element={<CountryInfo />} />
        <Route path="country-info/:countryCode" element={<CountryDetailsInfo />} />
      </Route>
    </Routes>
  );
};

export default MainRoutes;
