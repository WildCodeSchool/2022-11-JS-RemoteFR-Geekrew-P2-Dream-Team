import React from "react";
import { useNavigate } from "react-router-dom";
import chevronLeft from "../../assets/icons/chevronLeft.svg";

function ContinueBrowsing() {
  const navigate = useNavigate();
  const routeChange = () => {
    const path = `/Catalogue`;
    navigate(path);
  };
  return (
    <div className="flex flex-col w-10/12 text-xl md:w-10/12 md:justify-center md:py-2">
      <div className="text-white md:text-black flex justify-between md:my-4">
        <div className="md:flex md:flex-row md:flex-nowrap md:text-base">
          <button type="button" onClick={routeChange} className="md:flex">
            <img
              className="stroke-black text-black"
              src={chevronLeft}
              alt="go back"
            />
            <p className="hidden md:flex">Continuer de réver</p>
          </button>
        </div>

        <h3>Mon Panier</h3>
      </div>
      <hr className="text-white md:text-black md:leading-6	 " />
    </div>
  );
}

export default ContinueBrowsing;
