import { useState, useEffect } from "react";

const useRegions = () => {
  const [regions, setRegions] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchRegions = async () => {
      try {
        const response = await fetch("https://restcountries.com/v3.1/all");
        if (!response.ok) {
          throw new Error("Failed to fetch data");
        }
        const data = await response.json();
        const uniqueRegions = [
          ...new Set(data.map((country) => country.region)),
        ];
        setRegions(["all", ...uniqueRegions]);
        setLoading(false);
      } catch (error) {
        setError(error);
        setLoading(false);
      }
    };

    fetchRegions();
  }, []);

  return { regions, loading, error };
};

export default useRegions;
