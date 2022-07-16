import { map } from "lodash";
import { Dispatch, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Outlet, useLocation, useMatch, useNavigate } from "react-router-dom";
import { fetchCountryInfoList } from "../redux/action/countryInfoAction";

const CountryInfo = () => {
  const dispatch = useDispatch<any>();
  const navigate = useNavigate();
  const match = useLocation()
  const { countryList } = useSelector((state: any) => state.countryInfo);
  useEffect(() => {
    dispatch(fetchCountryInfoList());
  }, [dispatch]);
  return (
    <>
      <div className="container">
        <div className="d-flex justify-content-between">
          <div>tt</div>
          <div>tt</div>
        </div>
        <div className="row">
          {map(countryList, (item) => (
            <div className="col-md-3 p-3" onClick={()=> navigate(`/country-info/${item.cca2}`)} key={item.fifa}>
              <div className="card" style={{ width: "auto" }}>
                <img
                  height={150}
                  src={item.flags.svg}
                  className="card-img-top"
                  alt="..."
                />
                <div className="card-body">
                  <h5
                    className="card-title"
                    style={{ height: 50, fontSize: 14 }}
                  >
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
      </div>
      <Outlet />
    </>
  );
};

export default CountryInfo;
