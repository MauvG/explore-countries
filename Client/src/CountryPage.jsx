import React, { useEffect, useState } from "react";
import CountryDisplay from "./components/CountryDisplay";
import ErrorPage from "./components/ErrorPage";

const CountryPage = () => {
  const [countryName, setCountryName] = useState("");
  const [countryData, setCountryData] = useState(null);

  const fetchData = () => {
    // fetch(`/api/country/${countryName}`)
    fetch(
      `https://explore-countries-server.vercel.app/api/country/${countryName}`
    )
      .then((response) => response.json())
      .then((data) => {
        setCountryData(data);
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  };

  useEffect(() => {
    setCountryName(window.location.pathname.replace("/search/", ""));

    if (countryName) {
      fetchData();
    }
  }, [countryName]);

  return (
    <div>
      {countryData ? (
        <div>
          {countryData[0] ? (
            <CountryDisplay countryData={countryData[0]} />
          ) : (
            <ErrorPage />
          )}
        </div>
      ) : (
        <p className="text-center mt-40">Loading...</p>
      )}
    </div>
  );
};

export default CountryPage;
