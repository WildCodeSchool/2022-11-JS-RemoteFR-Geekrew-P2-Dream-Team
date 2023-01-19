import React from "react";
import PropTypes from "prop-types";
import CardsList from "../components/CardsList";

function Catalogue({ addToCart, setAddToCart }) {
  return (
    <div className="flex flex-col justify-center">
      <CardsList setAddToCart={setAddToCart} addToCart={addToCart} />
    </div>
  );
}

Catalogue.propTypes = {
  addToCart: PropTypes.arrayOf(
    PropTypes.shape({
      ID: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
      quantity: PropTypes.number.isRequired,
    })
  ).isRequired,
  setAddToCart: PropTypes.func.isRequired,
};
export default Catalogue;
