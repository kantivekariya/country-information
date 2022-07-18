import { Navigate, Route, Routes } from "react-router-dom";
import CountryDetailsInfo from "../components/CountryDetailsInfo ";
import CountryInfo from "../components/CountryInfo";
import Layout from "../layouts/Layout";

const MainRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route path="/">
          <Route path="/" element={<CountryInfo />} />
          <Route path=":countryCode" element={<CountryDetailsInfo />} />
        </Route>
      </Route>
    </Routes>
  );
};

export default MainRoutes;
