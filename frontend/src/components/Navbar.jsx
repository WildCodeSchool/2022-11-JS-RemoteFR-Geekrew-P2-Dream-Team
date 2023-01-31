import React, { useState } from "react";
import { NavLink, Link } from "react-router-dom";
import PropTypes from "prop-types";
import logo from "../assets/logo.svg";

function Navbar({ addToCart }) {
  const [isOpen, setIsOpen] = useState(false);

  const getActiveLinkStyle = ({ isActive }) => {
    if (isActive) {
      return { color: "#A8791D", fontWeight: "semibold", fontSize: "1.25rem" };
    }
    return null;
  };

  return (
    <div className="z-50">
      <nav
        id="top"
        className="w-full flex md:flex  items-center flex-nowrap justify-between md:flex-nowrap  md:bg-opacity-0 "
      >
        <div className="w-full flex flex-wrap justify-between md:items-center ">
          <Link to="/">
            <img src={logo} alt="logo" className="flex" />
          </Link>
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
                ? "absolute min-h-[100%] md:min-h-[0%] bottom-0 top-20 w-full flex flex-col items-center md:flex-row md:justify-end bg-gradient-blue-m backdrop-blur-md md:backdrop-blur-0 bg-opacity-30 text-xl md:z-0 z-30"
                : "relative md:mr-6 hidden md:align-middle md:items-center md:flex md:flex-row md:justify-end text-xl"
            }
          >
            <li className="mb-4 md:ml-4 pt-6 pb-6 md:p-0 md:z-30">
              <NavLink
                style={getActiveLinkStyle}
                onClick={() => setIsOpen(false)}
                to="/"
                className=" md:w-full px-3  text-white"
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
                className="md:w-full px-3 text-white flex flex-nowrap "
              >
                Panier
                <div
                  className="md:absolute md:inline-block md:top-0 md:right-0 md:bottom-auto 
              md:left-auto md:translate-x-2/4 md:-translate-y-1/2 md:rotate-0 
              md:skew-x-0 md:skew-y-0 md:scale-x-100 md:scale-y-100 md:py-1 md:px-2.5 
              md:text-xs md:leading-none md:text-center
              md:whitespace-nowrap md:align-baseline 
              md:font-bold md:bg-red md:text-white md:rounded-full md:z-5 md:animate-pulse hidden"
                >
                  {addToCart.length &&
                    addToCart
                      .map((elem) => elem.quantity)
                      .reduce((a, b) => a + b, 0)}
                </div>
              </NavLink>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
}
Navbar.propTypes = {
  addToCart: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      name: PropTypes.string,
      quantity: PropTypes.number.isRequired,
    })
  ).isRequired,
};

export default Navbar;
