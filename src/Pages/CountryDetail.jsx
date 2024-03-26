import { useParams } from "react-router-dom";
import { useCountry } from "../Hooks/useCountry";
import Button from "../Components/Button";
import { useNavigate } from "react-router-dom";
import "./CountryDetail.css";

const CountryDetail = () => {
  const navigator = useNavigate();

  const { countryName } = useParams();
  const {
    countryData: CountryDetail,
    loading,
    error,
  } = useCountry(countryName.toLowerCase());
  console.log(CountryDetail);

  if (loading) return <h1 className="loading">Loading Detail...</h1>;

  if (error) return <h1 className="error">{error}</h1>;

  return (
    <>
      <main className="country_detail_page">
        <Button title={"Back"} icon={"🔙"} onClick={() => navigator(-1)} />
        <section className="country_detail__section">
          <div>
            <img
              className="countty_detail__image"
              src={CountryDetail[0].flags.svg}
              alt={CountryDetail[0].flags.alt}
            />
          </div>

          <div className="country_detail__data">
            <h1>{CountryDetail[0].name.common}</h1>
            <ul className="country_detail__items">
              <li>
                Native Name: <span>{CountryDetail[0].altSpellings[1]} </span>
              </li>
              <li>
                Top Level Domain: <span>{CountryDetail[0].tld[0]} </span>
              </li>
              <li>
                Population:{" "}
                <span>{CountryDetail[0].population.toLocaleString()} </span>
              </li>
              <li>
                Currencies:{" "}
                {CountryDetail[0].currencies &&
                  Object.entries(CountryDetail[0].currencies).map(
                    ([key, value], index) => (
                      <span
                        key={index}
                        style={{ display: "inline", marginRight: "5px" }}
                      >
                        {value.name} ({value.symbol}),
                      </span>
                    )
                  )}
              </li>
              <li>
                Region: <span>{CountryDetail[0].region} </span>
              </li>
              <li>
                Languages:{" "}
                {CountryDetail[0].languages &&
                  Object.keys(CountryDetail[0].languages).map((key, index) => (
                    <span
                      key={index}
                      style={{ display: "inline", marginRight: "5px" }}
                    >
                      {CountryDetail[0].languages[key]},
                    </span>
                  ))}
              </li>
              <li>
                Sub Region: <span>{CountryDetail[0].altSpellings[1]} </span>
              </li>
              <li>
                Capital: <span>{CountryDetail[0].altSpellings[1]} </span>
              </li>
            </ul>
            <section className="couuntry_detail__borders">
              <p className="border_text">Border Countries:</p>
              {CountryDetail[0].borders ? (
                CountryDetail[0].borders.map((border) => (
                  <Button key={border} title={border} />
                ))
              ) : (
                <p>This Country has No Border with any other Countries</p>
              )}
            </section>
          </div>
        </section>
      </main>
    </>
  );
};

export default CountryDetail;
