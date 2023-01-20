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
    <div className="flex flex-col item-center">
      {!isRevelated && (
        <button
          onClick={() => setIsRevelated(true)}
          type="button"
          className=" bg-yellow px-8 py-4 my-7 rounded-full font-sans md:text-1xl text-xl text-white font-thin"
        >
          Découvrir mon {type.label}
        </button>
      )}

      {isRevelated && (
        <>
          <img src={dream.url} alt={`${type} ${emotion} ${loc} ${meteo}`} />
          <p className="pt-5 font-sans text-white">{dream.description}</p>
          <button
            onClick={() => {
              addToCart();
            }}
            type="button"
            className=" bg-yellow px-8 py-4 my-7 rounded-full font-sans md:text-1xl text-xl text-white font-thin"
          >
            Ajouter au panier
          </button>
          <button
            onClick={() => navigate("/")}
            type="button"
            className="border-solid border-2 border-yellow px-8 py-4 rounded-full font-sans md:text-1xl text-xl text-white font-thin"
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
