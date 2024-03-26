import { useEffect, useState } from "react";

const useCountry = (countryName = null) => {
  const [countryData, setCountryData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchData = async (url) => {
    try {
      const response = await fetch(url);
      if (!response.ok) {
        throw new Error("Failed to fetch data");
      }
      const data = await response.json();
      setCountryData(data);
      setLoading(false);
    } catch (error) {
      setError(error);
      setLoading(false);
    }
  };

  useEffect(() => {
    const apiUrl = countryName
      ? `https://restcountries.com/v3.1/name/${countryName}`
      : "https://restcountries.com/v3.1/all";

    fetchData(apiUrl);
  }, [countryName]);

  return { countryData, loading, error };
};

export { useCountry };
