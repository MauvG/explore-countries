import React from "react";
import { Link } from "react-router-dom";
import Navbar from "./Navbar";

const CountryDisplay = ({ countryData }) => {
  console.log(countryData);
  return (
    <div>
      <Navbar />
      <div className="flex items-center justify-center">
        <img
          src="/assets/worldMapColour.jpg"
          alt="background"
          className="absolute -z-10 opacity-10 mt-80"
        />
      </div>
      <div className="flex h-screen">
        <div className="flex-1 items-center text-center ml-20 mt-20 text-xl font-bold">
          <h1 className="text-5xl text-blue-500">
            {countryData?.name.common} ({countryData.flag})
          </h1>

          <h1 className="text-3xl text-yellow-400">
            {Object.values(countryData.name.nativeName)[1]
              ? Object.values(countryData.name.nativeName)[1].common
              : Object.values(countryData.name.nativeName)[0].common}
          </h1>

          <div className="flex items-center justify-center mt-10">
            <img
              src={countryData.flags.png}
              alt="continent"
              className="object-contain rounded-xl shadow-lg"
              width={300}
            />
          </div>
          <div className="mt-10 text-center font-bold text-xl">
            <Link
              to={countryData.maps.googleMaps}
              className="underline text-blue-600"
            >
              <div className="hover:scale-110">Google maps</div>
            </Link>
          </div>
        </div>
        <div className="flex-1 mr-20 flex flex-col item-center justify-center">
          <h1 className="text-2xl font-bold text-center">Info</h1>
          <div className="flex items-center justify-center rounded-3xl shadow-lg">
            <ul className="font-normal text-left list-disc text-lg m-10">
              <li className=" ">
                Captial: {countryData.capital ? countryData.capital[0] : ""}
              </li>

              <li className="">
                Language(s): {Object.values(countryData.languages)[0]}
                {Object.values(countryData.languages)[1]
                  ? ", " + Object.values(countryData.languages)[1]
                  : ""}
              </li>

              <li>Region: {countryData.region}</li>

              <li className="">
                Population: {countryData.population.toLocaleString("en-US")}
              </li>

              <li className="">
                Currency: {Object.values(countryData.currencies)[0].name} (
                {Object.values(countryData.currencies)[0].symbol})
              </li>
              <li>Area: {countryData.area.toLocaleString("en-US")}km²</li>
            </ul>
            <img
              src={countryData.coatOfArms.png}
              alt="flag"
              width={100}
              className="m-10"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CountryDisplay;
