import { useCallback, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Outlet } from "react-router-dom";
import CardList from "../components/card-list/CardList";
import DropdownComponent from "../components/dropdown/dropdown";
import Loading from "../components/Loading/Loading";
import SearchBox from "../components/search-box/search-box";
import { fetchCountryInfoList } from "../redux/action/countryInfoAction";

import "./_country-info.scss";

interface IProps {
  theme: string;
}

const CountryInfo = ({ theme }: IProps) => {
  const dispatch = useDispatch<any>();
  const [regions, setRegions] = useState([]);
  const [region, setRegion] = useState("all");
  const [searchField, setSearchField] = useState("");

  const { countryList, isLoading } = useSelector(
    (state: any) => state.countryInfo
  );

  useEffect(() => {
    dispatch(fetchCountryInfoList());
    if (countryList?.length > 1) {
      getRegionsList();
    }
  }, [dispatch]);

  const getRegionsList = useCallback(() => {
    setRegions(
      countryList
        .map((e: { region: any }) => e.region)
        .filter(
          (e: string, index: any, self: string | any[]) =>
            self.indexOf(e) === index && e !== ""
        )
    );
  }, [countryList]);

  const handleRegion = (event: any) => setRegion(event.target.value);

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) =>
    setSearchField(e.target.value);

  const filteredRegion = useCallback(() => {
    if (region !== "all")
      return countryList?.filter((country: { region: string }) =>
        country?.region?.toLowerCase()?.includes(region?.toLowerCase())
      );
    else return countryList;
  }, [countryList, region]);

  const filterCountries = filteredRegion()?.filter(
    (country: { name: { official: string } }) =>
      country.name?.official
        ?.toLowerCase()
        ?.includes(searchField?.toLowerCase())
  );

  return (
    <>
      <>
        {isLoading ? (
          <Loading theme={theme} />
        ) : (
          <div className="container">
            <div className="controllers">
              <SearchBox
                placeholder={`Search for a country...`}
                handleChange={handleSearch}
                theme={theme}
              />
              <DropdownComponent
                regions={regions}
                title={region !== "all" ? region : "Filter by region"}
                handleChange={handleRegion}
                theme={theme}
              />
            </div>
            <CardList countries={filterCountries} theme={theme} />
          </div>
        )}
      </>
      <Outlet />
    </>
  );
};

export default CountryInfo;
