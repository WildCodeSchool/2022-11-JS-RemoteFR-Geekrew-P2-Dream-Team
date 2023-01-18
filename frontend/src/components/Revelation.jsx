import PropTypes from "prop-types";
import { useState } from "react";
import dreams from "../../csvjson.json";

function Revelation({ type, emotion, loc, meteo }) {
  const dream = dreams.find(
    (d) =>
      d["TYPE DE REVE"] === type &&
      d.EMOTION === emotion &&
      d.LIEU === loc &&
      d.METEO === meteo
  );
  const [isRevelated, setIsRevelated] = useState(false);

  return (
    <div className="flex flex-col item-center">
      <button
        onClick={() => setIsRevelated(true)}
        type="button"
        className=" bg-yellow px-8 py-4 my-7 rounded-full font-sans md:text-1xl text-xl text-white font-thin"
      >
        {" "}
        Découvrir mon {type}
      </button>
      {isRevelated && (
        <img src={dream.URL} alt={`${type} ${emotion} ${loc} ${meteo}`} />
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
