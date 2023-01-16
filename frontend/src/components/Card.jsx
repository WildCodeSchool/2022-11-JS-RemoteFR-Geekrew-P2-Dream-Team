import React from "react";
import PropTypes from "prop-types";

function Card({ elem, handlePopUpOn }) {
  return (
    <button
      key={elem.ID}
      className="flex flex-col items-center md:items-start w-5/12 md:w-1/5 md:mx-2 md:h-1/3 rounded-xl my-2 md:my-4 py-2 max-w-w-max-card md:max-w-none "
      type="button"
      onClick={() => handlePopUpOn(elem.ID)}
    >
      <img
        className="aspect-square w-11/12 md:max-h-64 rounded-xl"
        src={elem.URL}
        alt={elem.DESCRIPTION}
      />
      <span className="hidden font-base font-medium md:flex">
        {elem.DESCRIPTION.length > 75
          ? `${elem.DESCRIPTION.substring(0, 70)} ...`
          : elem.DESCRIPTION}
      </span>
      <h4 className="hidden">{elem.TYPE}</h4>
      <span className="hidden ">{elem.EMOTION}</span>
      <span className="hidden">{elem.LIEU}</span>
      <span className="hidden">{elem.METEO}</span>
      {elem.TYPE === "Rêve" && (
        <span className="flex flex-row items-baseline text-white my-1">
          <p className="font-medium text-xl mr-1">30 000 {"  "}</p>
          <p className="font-normal text-xs"> {"  "}dreameez</p>
        </span>
      )}
      {elem.TYPE === "Cauchemar" && (
        <span className="flex flex-row items-baseline text-white my-1">
          <p className="font-medium text-xl mr-1">5000 {"  "}</p>
          <p className="font-normal text-xs"> {"  "}dreameez</p>
        </span>
      )}
    </button>
  );
}

Card.propTypes = {
  elem: PropTypes.func.isRequired,
  handlePopUpOn: PropTypes.func.isRequired,
};

export default Card;
