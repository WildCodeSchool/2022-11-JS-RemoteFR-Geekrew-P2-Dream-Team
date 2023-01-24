import PropTypes from "prop-types";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import dreams from "../../csvjson.json";

function Revelation({ type, emotion, loc, meteo }) {
  const navigate = useNavigate();
  const dream = dreams.find(
    (d) =>
      d.type === type.value &&
      d.emotion === emotion &&
      d.lieu === loc &&
      d.meteo === meteo
  );
  const [isRevelated, setIsRevelated] = useState(false);
  const shoppingList = [];

  const addToCart = () => {
    shoppingList.push(dream);
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
              addToCart();
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
};

export default Revelation;
