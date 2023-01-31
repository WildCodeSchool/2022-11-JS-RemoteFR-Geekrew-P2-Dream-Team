import React from "react";
import PropTypes from "prop-types";
import CardsList from "../components/CardsList";
import Footer from "../components/Footer";

function Catalogue({ addToCart, setAddToCart }) {
  return (
    <div className="flex flex-col justify-center z-10">
      <CardsList setAddToCart={setAddToCart} addToCart={addToCart} />
      <Footer />
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
