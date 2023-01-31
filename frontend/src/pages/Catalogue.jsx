import React from "react";
import PropTypes from "prop-types";
import CardsList from "../components/CardsList";

function Catalogue({ addToCart, setAddToCart }) {
  return (
    <div className="flex flex-col justify-center z-10 ">
      <CardsList setAddToCart={setAddToCart} addToCart={addToCart} />
      <button
        type="button"
        className="absolute bottom-[10vh]  z-40 right-3 rounded-full border-2 animate-pulse"
      >
        <a href="#top">
          <svg
            width="30"
            height="30"
            viewBox="0 0 18 18"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M13.5 11.25L9 6.75L4.5 11.25"
              stroke="white"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </a>
      </button>
    </div>
  );
}

Catalogue.propTypes = {
  addToCart: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      name: PropTypes.string,
      quantity: PropTypes.number.isRequired,
    })
  ).isRequired,
  setAddToCart: PropTypes.func.isRequired,
};
export default Catalogue;
