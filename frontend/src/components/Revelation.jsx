import PropTypes from "prop-types";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import dreams from "../../csvjson.json";

function Revelation({ type, emotion, loc, meteo }) {
  const navigate = useNavigate();
  const dream = dreams.find(
    (d) =>
      d.TYPE === type &&
      d.EMOTION === emotion &&
      d.LIEU === loc &&
      d.METEO === meteo
  );
  const [isRevelated, setIsRevelated] = useState(false);

  return (
    <div className="flex flex-col item-center">
      {!isRevelated && (
        <button
          onClick={() => setIsRevelated(true)}
          type="button"
          className=" bg-yellow px-8 py-4 my-7 rounded-full font-sans md:text-1xl text-xl text-white font-thin"
        >
          Découvrir mon {type}
        </button>
      )}

      {isRevelated && (
        <>
          <img src={dream.URL} alt={`${type} ${emotion} ${loc} ${meteo}`} />
          <p className="pt-5 font-sans text-white">{dream.DESCRIPTION}</p>
          <button
            onClick={() => setIsRevelated(true)}
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
  type: PropTypes.string.isRequired,
  emotion: PropTypes.string.isRequired,
  loc: PropTypes.string.isRequired,
  meteo: PropTypes.string.isRequired,
};

export default Revelation;
