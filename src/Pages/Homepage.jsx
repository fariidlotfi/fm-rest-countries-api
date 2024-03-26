import "./Homepage.css";
import CountryCard from "../Components/CountryCard";
import { useCountry } from "../Hooks/useCountry";
import { Link } from "react-router-dom";
import Search from "../Components/Search";
import { useState } from "react";
import useRegions from "../Hooks/useRegions";
import FilterBy from "../Components/FilterBy";

const Homepage = () => {
  const [searchName, setSearchName] = useState("");
  const [searchRegion, setSearchRegion] = useState("all");
  const {
    countryData: allCountries,
    loading: countryLoading,
    error: countryError,
  } = useCountry();
  const {
    regions,
    loading: regionsLoading,
    error: regionsError,
  } = useRegions();

  if (countryLoading || regionsLoading) {
    return <h1 className="loading">Loading Data...</h1>;
  }

  if (countryError || regionsError) {
    return (
      <h1 className="error">Error fetching data. Please try again later.</h1>
    );
  }

  const countries = allCountries || [];

  const filteredCountries = countries
    .filter((country) =>
      country.name.common.toLowerCase().includes(searchName.toLowerCase())
    )
    .filter((country) =>
      searchRegion === "all" ? true : country.region === searchRegion
    );

  return (
    <main className="main">
      <section className="main__filters">
        <Search
          placeholder={"Enter Country Name..."}
          value={searchName}
          onChange={(e) => setSearchName(e.target.value)}
          type={"text"}
        />
        <FilterBy
          value={searchRegion}
          onChange={(e) => setSearchRegion(e.target.value)}
        >
          {regions.map((region) => (
            <option key={region} value={region}>
              {region}
            </option>
          ))}
        </FilterBy>
      </section>
      <section className="country_grid">
        {filteredCountries.map((country) => (
          <Link
            to={`/country/${country.name.common}`}
            key={country.name.common}
          >
            <CountryCard
              name={country.name.common}
              capital={country.capital}
              image={country.flags.png}
              population={country.population}
              region={country.region}
            />
          </Link>
        ))}
      </section>
    </main>
  );
};

export default Homepage;
