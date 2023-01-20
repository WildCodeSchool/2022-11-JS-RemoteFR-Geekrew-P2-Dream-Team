import React from "react";
import PropTypes from "prop-types";
import dreameez from "../../assets/icons/dreameez.svg";

function Resume({ addToCart }) {
  const dreamSubTotal = addToCart.filter(
    (dream) => dream.type === "reve"
  ).length;
  const dreamsPrice = dreamSubTotal * 30000;
  const nightmareSubTotal = addToCart.filter(
    (dream) => dream.type === "cauchemar"
  ).length;
  const nightmaresPrice = nightmareSubTotal * 5000;
  const total = dreamsPrice + nightmaresPrice;

  return (
    <div className="w-10/12 flex flex-col items-center md:bg-white md:rounded-2xl md:py-2">
      <p className="text-white md:text-black self-end text-left my-2 md:mx-2">
        {" "}
        Récapitulatif{" "}
      </p>
      <hr className="text-white md:text-black h-2 w-full md:w-11/12" />
      <div className="flex flex-col rounded-xl justify-between w-full items-center bg-blue md:bg-white text-white md:text-black m-2">
        <div className="flex flex-nowrap justify-between w-11/12 mt-4">
          <p>
            {dreamSubTotal} {dreamSubTotal === 0 ? "rêve" : "rêves"}{" "}
          </p>
          <p className="flex flex-nowrap justify-between w-3/12">
            {dreamsPrice} <img src={dreameez} alt="dreameez" />
          </p>
        </div>
        <div className="flex justify-between flex-nowrap w-11/12 mt-4">
          <p>
            {nightmareSubTotal}{" "}
            {nightmareSubTotal === 0 ? "cauchemar" : "cauchermars"}
          </p>
          <p className="flex flex-nowrap justify-between w-3/12">
            {nightmaresPrice}
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
        <button
          type="button"
          className="bg-light-yellow w-11/12 rounded-2xl my-4 py-2"
        >
          {" "}
          Valider votre merveilleux paiement
        </button>
      </div>
    </div>
  );
}

Resume.propTypes = {
  addToCart: PropTypes.arrayOf(
    PropTypes.shape({
      ID: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
      quantity: PropTypes.number.isRequired,
    })
  ).isRequired,
};

export default Resume;
