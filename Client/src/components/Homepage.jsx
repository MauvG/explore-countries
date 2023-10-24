import React, { useState } from "react";
import { Link } from "react-router-dom";

const Homepage = () => {
  const [country, setCountry] = useState("");

  const handleEnter = (event) => {
    if (event.key === "Enter" || event.keyCode === 13) {
      const { href } = window.location;
      window.location.href = `${href}search/${country}`;
    }
  };

  return (
    <div className="flex h-screen items-center justify-center text-center">
      <div className="flex-1">
        <h1 className="text-5xl font-bold text-blue-600">Explore the world!</h1>
        <h2 className="text-2xl font-bold text-yellow-500">
          Search for any country
        </h2>

        <div className="flex items-center justify-center mt-10">
          <input
            type="text"
            onChange={(e) => setCountry(e.target.value.toLowerCase())}
            onKeyDown={handleEnter}
            placeholder="e.g. Ireland"
            className="focus:outline-none border-2 border-blue-600 rounded-full pl-4 pr-10 p-1"
          />

          <Link to={`/search/${country}`} className="ml-[-35px] text-blue-600">
            <div className="hover:scale-110">
              <img src="/public/assets/search.svg" alt="Search" />
            </div>
          </Link>
        </div>
      </div>

      <div className="flex-1 m-10">
        <img
          src="/public/assets/worldMapColour.jpg"
          alt="Background"
          className="h-full object-contain"
        />
      </div>
    </div>
  );
};

export default Homepage;
