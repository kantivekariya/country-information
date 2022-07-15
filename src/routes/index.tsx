import { Route, Routes } from "react-router-dom";
import CountryDetailsInfo from "../components/CountryDetailsInfo ";
import CountryInfo from "../components/CountryInfo";
import Layout from "../layouts/Layout";

const MainRoutes = () => {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<CountryInfo />}>
          <Route path=":countryId" element={<CountryDetailsInfo />} />
        </Route>
      </Routes>
    </Layout>
  );
};

export default MainRoutes;
