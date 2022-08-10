import { Route, Routes } from "react-router-dom";
import CountryDetailsInfo from "../pages/CountryDetailsInfo";
import CountryInfo from "../pages/CountryInfo";
import Layout from "../layouts/Layout";
import useDarkMode from "../hooks/useDarkMode";
import { useEffect } from "react";

const MainRoutes = () => {
  const { theme: currentTheme, toggleTheme } = useDarkMode();

  useEffect(() => {
    if (currentTheme === "light") {
      document.body.classList.remove("dark-background");
      document.body.classList.add("light-background");
    } else {
      document.body.classList.add("dark-background");
      document.body.classList.remove("light-background");
    }
  }, [currentTheme]);

  return (
    <Routes>
      <Route path="/" element={<Layout theme={currentTheme} toggleTheme={toggleTheme} />}>
        <Route path="/">
          <Route path="/" element={<CountryInfo theme={currentTheme} />} />
          <Route
            path=":countryCode"
            element={<CountryDetailsInfo theme={currentTheme} />}
          />
        </Route>
      </Route>
    </Routes>
  );
};

export default MainRoutes;
