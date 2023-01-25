import React from "react";
import PropTypes from "prop-types";
import ShoppingBagContent from "../components/ShoppingBag/ShoppingBagContent";
import ContinueBrowsing from "../components/ShoppingBag/ContinueBrowsing";
import Resume from "../components/ShoppingBag/Resume";

function Panier({ addToCart, setAddToCart }) {
  return (
    <div className="z-10 w-full flex flex-col items-center justify-between md:flex-row md:items-start md:justify-around md:ml-4">
      <div className=" w-full md:w-full flex flex-col items-center justify-between md:bg-white md:rounded-3xl">
        <ContinueBrowsing />
        <ShoppingBagContent addToCart={addToCart} setAddToCart={setAddToCart} />
      </div>
      <div className="w-full flex flex-col items-center justify-between md:justify-center md:w-full">
        {addToCart.length > 0 ? (
          <Resume addToCart={addToCart} />
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
