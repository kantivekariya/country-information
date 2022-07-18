import { IconProp } from "@fortawesome/fontawesome-svg-core";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { map } from "lodash";
import { Dispatch, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Outlet, useLocation, useMatch, useNavigate } from "react-router-dom";
import { fetchCountryInfoList } from "../redux/action/countryInfoAction";

const CountryInfo = () => {
  const dispatch = useDispatch<any>();
  const navigate = useNavigate();
  const { countryList } = useSelector((state: any) => state.countryInfo);
  useEffect(() => {
    dispatch(fetchCountryInfoList());
  }, [dispatch]);
  return (
    <>
      <div className="row mt-5">
        <div className="col-md-8">
          <div className="form-group has-search">
            <span className="fa fa-search form-control-feedback pt-1"></span>
            <input
              type="text"
              className="form-control"
              placeholder="Search for country..."
            />
          </div>
        </div>
        <div className="col-md-4 text-end">
          <select
            className="form-select w-50 form-select-lg mb-3"
            aria-label=".form-select-lg example"
          >
            <option selected>Filter By Region</option>
            <option value="1">One</option>
            <option value="2">Two</option>
            <option value="3">Three</option>
          </select>
        </div>
      </div>
      <div className="row">
        {map(countryList, (item) => (
          <div
            className="col-md-3 p-3"
            onClick={() => navigate(`/${item.cca2}`)}
            key={item.fifa}
          >
            <div className="card" style={{ width: "auto" }}>
              <img
                height={150}
                src={item.flags.svg}
                className="card-img-top"
                alt="..."
              />
              <div className="card-body">
                <h5 className="card-title" style={{ height: 50, fontSize: 14 }}>
                  {item.name.official}
                </h5>
                <p className="card-text mb-1">Population: {item.population}</p>
                <p className="card-text mb-1">Region: {item.region}</p>
                <p className="card-text mb-1">Capital: {item?.capital?.[0]}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
      <Outlet />
    </>
  );
};

export default CountryInfo;
