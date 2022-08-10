import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";
import Loading from "../components/Loading/Loading";
import { fetchCountryInfoDetails } from "../redux/action/CountryInfoAction";

import "./_country-info-details.scss";

interface IProps {
  theme: string;
}

const CountryDetailsInfo = ({ theme }: IProps) => {
  const { countryCode } = useParams<string>();
  const dispatch = useDispatch<any>();
  const { countryDetailsInfo, isLoading } = useSelector(
    (state: any) => state.countryInfoDetails
  );
  useEffect(() => {
    dispatch(fetchCountryInfoDetails(countryCode));
  }, [dispatch, countryCode]);
  return (
    <>
      {isLoading ? (
        <>
          <Loading theme={theme} />
        </>
      ) : (
        <div className="detail-container">
          <div className="detail-back-btn">
            <Link to={`/`}>
              <button className="detail-link-btn">
                <i className="fas fa-long-arrow-alt-left icon"></i> Back
              </button>
            </Link>
          </div>
          <div className="detail-stats">
            <img
              className="detail-flag"
              alt="Flag"
              src={countryDetailsInfo?.flags?.svg}
            />
            <div className={`detail-text-container ${theme}-text`}>
              <h1 className="heading">{countryDetailsInfo?.name?.official}</h1>
              <div className="detail-text">
                <div className="left">
                  <p className="text">
                    Native Name:{" "}
                    <span>
                      {countryDetailsInfo?.name?.nativeName &&
                        Object.values(countryDetailsInfo?.name?.nativeName)
                          ?.map((cur: any) => cur?.common)
                          ?.join(", ")}
                    </span>
                  </p>
                  <p className="text">
                    Population:
                    <span>
                      {countryDetailsInfo?.population?.toLocaleString()}
                    </span>
                  </p>
                  <p className="text">
                    Region: <span>{countryDetailsInfo?.region}</span>
                  </p>
                  <p className="text">
                    Sub Region: <span>{countryDetailsInfo?.subregion}</span>
                  </p>
                  <p className="text">
                    Capital: <span>{countryDetailsInfo?.capital?.[0]}</span>
                  </p>
                </div>
                <div className="right">
                  <p className="text">
                    Top Level Domain:{" "}
                    <span>
                      {countryDetailsInfo?.tld
                        ?.map((domain: string) => domain)
                        .join(", ")}
                    </span>
                  </p>
                  <p className="text">
                    Currencies:{" "}
                    <span>
                      {countryDetailsInfo?.currencies &&
                        Object.values(countryDetailsInfo?.currencies)?.map(
                          (cur: any) => cur?.name
                        )}
                    </span>
                  </p>
                  <p className="text">
                    Languages:
                    <span>
                      {countryDetailsInfo?.languages &&
                        Object.values(countryDetailsInfo?.languages).join(", ")}
                    </span>
                  </p>
                </div>
              </div>
              {countryDetailsInfo?.borders?.length > 0 && (
                <div className="border">
                  <p className="border-text">Border Countries:</p>
                  <span className="border-btn">
                    {countryDetailsInfo?.borders.map(
                      (border: string, index: number) => (
                        <Link key={index} to={`/${border}`}>
                          <button className="detail-link-btn">{border}</button>
                        </Link>
                      )
                    )}
                  </span>
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default CountryDetailsInfo;
