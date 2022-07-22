import { Dispatch, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Outlet, useLocation, useMatch, useNavigate } from "react-router-dom";
import CardList from "../components/card-list/CardList";
import Loading from "../components/Loading/Loading";
import { fetchCountryInfoList } from "../redux/action/countryInfoAction";

import "./_country-info.scss";

interface IProps {
  theme: string;
}

const CountryInfo = ({ theme }: IProps) => {
  const dispatch = useDispatch<any>();
  const navigate = useNavigate();
  const { countryList, isLoading } = useSelector(
    (state: any) => state.countryInfo
  );
  useEffect(() => {
    dispatch(fetchCountryInfoList());
  }, [dispatch]);

  return (
    <>
      <>
        {isLoading ? (
          <Loading />
        ) : (
          <div className="container">
            {/* <div className="controllers">
              <SearchBox
                placeholder={`Search for a country...`}
                handleChange={this.handleSearch}
                theme={theme}
              />
              <Dropdown
                regions={regions}
                title="Filter by region"
                handleChange={this.handleRegion}
                theme={theme}
              />
            </div> */}
            <CardList countries={countryList} theme={theme} />
          </div>
        )}
      </>
      <Outlet />
    </>
  );
};

export default CountryInfo;
