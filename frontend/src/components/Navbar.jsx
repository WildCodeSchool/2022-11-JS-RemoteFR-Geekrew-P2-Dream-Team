import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import logo from "../assets/logo.svg";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const getActiveLinkStyle = ({ isActive }) => {
    if (isActive) {
      return { color: "#A8791D", fontWeight: "semibold", fontSize: "1.25rem" };
    }
    return null;
  };

  return (
    <div>
      <nav className="w-full flex md:flex  items-center flex-nowrap justify-between md:flex-nowrap  md:bg-opacity-0 ">
        <div className="w-full flex flex-wrap justify-between md:items-center ">
          <img src={logo} alt="logo" className="flex" />
          <button
            type="button"
            onClick={() => setIsOpen(!isOpen)}
            className=" mr-8  border-none  text-white  md:hidden items-start scale-150"
          >
            {isOpen ? (
              <svg
                className="fill-current h-3 w-3"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <title>Croix</title>
                <path d="M10 8.586L2.929 1.515 1.515 2.929 8.586 10l-7.071 7.071 1.414 1.414L10 11.414l7.071 7.071 1.414-1.414L11.414 10l7.071-7.071-1.414-1.414L10 8.586z" />
              </svg>
            ) : (
              <svg
                className="fill-current h-3 w-3"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <title>Menu</title>
                <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
              </svg>
            )}
          </button>

          <ul
            className={
              isOpen
                ? "absolute min-h-[700%] md:min-h-[0%] bottom-0 top-20 w-full flex flex-col items-center md:flex-row md:justify-end bg-gradient-blue-m backdrop-blur-md md:backdrop-blur-0 bg-opacity-30 text-xl md:z-0 z-30"
                : "relative md:mr-6 hidden md:flex md:flex-row md:justify-end text-xl"
            }
          >
            <li className="mb-4 md:ml-4 pt-6 pb-6 md:p-0 md:z-30">
              <NavLink
                style={getActiveLinkStyle}
                onClick={() => setIsOpen(false)}
                to="/"
                className=" md:w-full px-3  rounded-md text-white"
              >
                Accueil
              </NavLink>
            </li>
            <li className="mb-4 md:ml-4 pb-6 md:p-0 md:z-30">
              <NavLink
                style={getActiveLinkStyle}
                onClick={() => setIsOpen(false)}
                to="/Apropos"
                className="md:w-full px-3   text-white  "
              >
                A Propos
              </NavLink>
            </li>
            <li className="mb-4 md:ml-4 pb-6 md:p-0 md:z-30 ">
              <NavLink
                style={getActiveLinkStyle}
                onClick={() => setIsOpen(false)}
                to="/Catalogue"
                className="  md:w-full px-3 pb-6 md:p-0 text-white"
              >
                Catalogue
              </NavLink>
            </li>
            <li className="mb-4 md:ml-4 pb-6 md:p-0 md:z-30">
              <NavLink
                style={getActiveLinkStyle}
                onClick={() => setIsOpen(false)}
                to="/Panier"
                className=" md:w-full px-3  pb-6 text-white"
              >
                Panier
              </NavLink>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
