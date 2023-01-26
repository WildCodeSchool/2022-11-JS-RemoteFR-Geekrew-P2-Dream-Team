import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import dreameez from "../../assets/icons/dreameez.svg";

function Resume({ addToCart }) {
  const dreamSubTotal = addToCart.filter((dream) => dream.type === "reve");
  const dreamsQuantity = dreamSubTotal
    .map((elem) => elem.quantity)
    .reduce((a, b) => a + b, 0);
  const dreamsPrice = dreamSubTotal
    .map((elem) => elem.quantity * 30000)
    .reduce((a, b) => a + b, 0);

  const nightmareSubTotal = addToCart.filter(
    (dream) => dream.type === "cauchemar"
  );

  const nightmaresQuantity = addToCart
    .filter((dream) => dream.type === "cauchemar")
    .map((elem) => elem.quantity)
    .reduce((a, b) => a + b, 0);

  const nightmaresPrice = nightmareSubTotal
    .map((elem) => elem.quantity * 5000)
    .reduce((a, b) => a + b, 0);

  const total = dreamsPrice + nightmaresPrice;

  return (
    <div className="w-10/12">
      {" "}
      {!addToCart.length ? (
        <div> PANIER VIDE </div>
      ) : (
        <div className="w-full flex flex-col items-center md:bg-white md:rounded-2xl md:py-2">
          <p className="text-white md:text-black self-end text-left my-2 md:mx-2">
            {" "}
            Récapitulatif{" "}
          </p>
          <hr className="text-white md:text-black h-2 w-full " />
          <div className="flex flex-col rounded-xl justify-between w-full items-center bg-blue md:bg-white text-white md:text-black m-2">
            <div className="flex flex-nowrap justify-between w-11/12 mt-4">
              <p>
                {dreamSubTotal ? dreamsQuantity : 0}{" "}
                {dreamsQuantity <= 1 ? "rêve" : "rêves"}{" "}
              </p>
              <p className="flex flex-nowrap justify-between w-3/12">
                {dreamSubTotal ? dreamsPrice : 0}{" "}
                <img src={dreameez} alt="dreameez" />
              </p>
            </div>
            <div className="flex justify-between flex-nowrap w-11/12 mt-4">
              <p>
                {nightmareSubTotal ? nightmaresQuantity : 0}{" "}
                {nightmaresQuantity <= 1 ? "cauchemar" : "cauchemars"}
              </p>
              <p className="flex flex-nowrap justify-between w-3/12">
                {nightmareSubTotal ? nightmaresPrice : 0}
                <img src={dreameez} alt="dreameez" />
              </p>
            </div>
            <hr className="w-11/12 h-2 mt-4" />
            <div className="flex whitespace-nowrap flex-nowrap justify-between font-medium w-11/12 mt-4">
              <p className="">Total</p>
              <p className="flex flex-nowrap justify-between w-3/12">
                {total} <img src={dreameez} alt="dreameez" />
              </p>
            </div>
            <Link to="/Confirmation">
              <button
                type="button"
                className="bg-light-yellow w-11/12 rounded-2xl my-4 py-2"
              >
                Valider votre merveilleux paiement{" "}
              </button>
            </Link>
          </div>
        </div>
      )}
    </div>
  );
}

Resume.propTypes = {
  addToCart: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      name: PropTypes.string,
      quantity: PropTypes.number.isRequired,
    })
  ).isRequired,
};

export default Resume;
