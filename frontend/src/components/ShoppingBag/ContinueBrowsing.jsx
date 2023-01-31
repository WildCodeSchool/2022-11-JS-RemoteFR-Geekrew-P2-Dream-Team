import React from "react";
import { useNavigate } from "react-router-dom";

function ContinueBrowsing() {
  const navigate = useNavigate();
  const routeChange = () => {
    const path = `/Catalogue`;
    navigate(path);
  };
  return (
    <div className="z-10 flex flex-col w-10/12 text-xl md:w-10/12 md:justify-center md:py-2">
      <div className="text-white md:text-black flex justify-between md:my-4">
        <div className="md:flex md:flex-row md:flex-nowrap md:text-base">
          <button type="button" onClick={routeChange} className="md:flex">
            <p className="text-white md:text-black mr-2"> &#x3C; </p>
            <p className="hidden md:flex">Continuer de rêver</p>
          </button>
        </div>

        <h3>Mon Panier</h3>
      </div>
      <hr className="text-white md:bg-light-grey md:h-0.5 md:leading-6" />
    </div>
  );
}

export default ContinueBrowsing;
