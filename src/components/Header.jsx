import React from "react";
import { Button } from "./ui/button";
import { Link } from "react-router-dom";

const Header = ({ children }) => {
  return (
    <div className="z-50 sticky top-0 bg-opacity backdrop-blur border-b py-2 px-4 text-center w-full flex items-center justify-between">
      <Link to="/">
        <h1 className="text-2xl hover:cursor-pointer font-bold hover:text-secondary">
          J. Chau
        </h1>
      </Link>
      {children}
    </div>
  );
};

export default Header;
