import React from "react";
import PropTypes from "prop-types";
import ShoppingBagContent from "../components/ShoppingBag/ShoppingBagContent";
import ContinueBrowsing from "../components/ShoppingBag/ContinueBrowsing";
import Resume from "../components/ShoppingBag/Resume";

function Panier({ addToCart, setAddToCart }) {
  return (
    <div className="z-10 w-full flex flex-col items-center md:flex-row md:items-start md:justify-evenly md:mt-10">
      <div className="w-full md:w-7/12 flex flex-col items-center justify-between md:bg-white md:rounded-3xl mt-4 md:mt-0">
        <ContinueBrowsing />
        <ShoppingBagContent addToCart={addToCart} setAddToCart={setAddToCart} />
      </div>
      <div className="max-[768px]:w-full md:w-4/12 flex flex-col items-center justify-between md:justify-center">
        {addToCart.length > 0 ? (
          <Resume addToCart={addToCart} setAddToCart={setAddToCart} />
        ) : (
          <div className="text-white flex justify-center p-5">
            Votre panier est vide, il est temps de commencer à rêver
          </div>
        )}
      </div>
    </div>
  );
}

Panier.propTypes = {
  addToCart: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      name: PropTypes.string,
      quantity: PropTypes.number.isRequired,
    })
  ).isRequired,
  setAddToCart: PropTypes.func.isRequired,
};

export default Panier;
