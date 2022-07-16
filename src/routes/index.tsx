import { Navigate, Route, Routes } from "react-router-dom";
import CountryDetailsInfo from "../components/CountryDetailsInfo ";
import CountryInfo from "../components/CountryInfo";
import Layout from "../layouts/Layout";

const MainRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Navigate to="contry-info" />} />
        <Route path="contry-info" element={<CountryInfo />}>
          <Route path=":countryId" element={<CountryDetailsInfo />} />
        </Route>
      </Route>
    </Routes>
  );
};

export default MainRoutes;
