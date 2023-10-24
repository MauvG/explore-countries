import React from "react";
import { Link } from "react-router-dom";

const ErrorPage = () => {
  return (
    <div className="text-xl text-center mt-40">
      <h1>404</h1>
      <h1>Page not found!</h1>

      <div className="text-center mt-10">
        <button className="rounded-full text-sm bg-blue-600 text-white font-bold px-8 p-2 hover:scale-110">
          <Link to="/">Go back</Link>
        </button>
      </div>
    </div>
  );
};

export default ErrorPage;
