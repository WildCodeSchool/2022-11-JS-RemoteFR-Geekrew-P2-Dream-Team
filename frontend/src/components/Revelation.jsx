import PropTypes from "prop-types";
import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

function Revelation({ type, emotion, loc, meteo, addToCart, setAddToCart }) {
  const navigate = useNavigate();
  const [data, setData] = useState([]);
  const [isRevelated, setIsRevelated] = useState(false);

  useEffect(() => {
    axios
      .get(`${import.meta.env.VITE_BACKEND_URL}/dreams`).then((res) => setData(res.data));
  }, []);

  const dream = data.find(
    (d) =>
      d.type === type.value &&
      d.emotion === emotion &&
      d.lieu === loc &&
      d.meteo === meteo
  );

  const handleClick = () => {
    const found = addToCart.find((d) => d.id === dream.id);

    setAddToCart([
      ...addToCart.filter((d) => d.id !== dream.id),
      {
        id: dream.id,
        type: dream.type,
        description: dream.description,
        url: dream.url,
        quantity: found ? found.quantity + 1 : 1,
      },
    ]);

    navigate("/Panier");
  };

  return (
    <div className="flex flex-col items-center">
      {!isRevelated && (
        <button
          onClick={() => setIsRevelated(true)}
          type="button"
          className="z-50 bg-yellow px-8 py-4 my-7 rounded-full font-sans md:text-1xl text-xl text-white font-thin"
        >
          Découvrir mon {type.label}
        </button>
      )}

      {isRevelated && (
        <>
          <div className="flex flex-col justify-center items-center">
            <img
              className="bg-noise-pattern border-solid border-2  rounded-xl border-medium-grey p-8 justify-center items-center h-[20rem] md:h-[30rem] my-1 "
              src={dream.url}
              alt={`${type} ${emotion} ${loc} ${meteo}`}
            />
          </div>
          <div>
            <p className="text-center pt-5 font-sans text-white">
              {dream.description}
            </p>
          </div>
          <button
            onClick={() => {
              handleClick(dream);
            }}
            type="button"
            className="z-50 bg-yellow border-2 border-yellow px-8 py-4 my-2 rounded-full font-sans md:text-2xl text-xl text-white font-thin"
          >
            Ajouter au panier
          </button>
          <button
            onClick={() => navigate("/")}
            type="button"
            className="z-50 border-2 border-yellow bg-transparent bg-yellow hover:border-2 hover:  px-8 py-4 rounded-full font-sans md:text-2xl text-xl text-white font-thin"
          >
            Retour à l'accueil
          </button>
        </>
      )}
    </div>
  );
}

Revelation.propTypes = {
  type: PropTypes.shape({ value: PropTypes.string, label: PropTypes.string })
    .isRequired,
  emotion: PropTypes.string.isRequired,
  loc: PropTypes.string.isRequired,
  meteo: PropTypes.string.isRequired,
  addToCart: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      name: PropTypes.string,
      quantity: PropTypes.number.isRequired,
    })
  ).isRequired,
  setAddToCart: PropTypes.func.isRequired,
};

export default Revelation;
