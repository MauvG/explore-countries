import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="flex justify-between mx-5 my-2 text-blue-600">
      <h1 className="font-bold text-2xl">Explore the world</h1>
      <div className="hover:scale-110">
        <Link to="/" className="text-lg underline">
          Home
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
