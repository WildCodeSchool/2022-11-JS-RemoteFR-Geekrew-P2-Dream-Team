import PropTypes from "prop-types";

function Step4({ onSelectMeteo, type }) {
  const handleMeteoChange = (meteo) => {
    onSelectMeteo(meteo);
  };

  const positiveMeteos = ["Chaleur", "Pluvieux", "Froid"];
  const negativeMeteos = ["Canicule", "Tempete", "Glacial"];

  return (
    <div>
      <h1 className="text-white font-cinzel text-2xl">
        Choisissez votre type d'émotion
      </h1>
      {type === "REVE" ? (
        <div className="flex flex-col">
          {positiveMeteos.map((meteo) => (
            <button
              key={meteo}
              type="button"
              className=" bg-yellow px-8 py-4 mt-7 rounded-full font-sans md:text-1xl text-xl text-white font-thin"
              onClick={() => handleMeteoChange(meteo.toUpperCase())}
            >
              {meteo}
            </button>
          ))}
        </div>
      ) : (
        <div className="flex flex-col">
          {negativeMeteos.map((meteo) => (
            <button
              key={meteo}
              type="button"
              className=" bg-yellow px-8 py-4 mt-7 rounded-full font-sans md:text-1xl text-xl text-white font-thin"
              onClick={() => handleMeteoChange(meteo.toUpperCase())}
            >
              {meteo}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
Step4.propTypes = {
  onSelectMeteo: PropTypes.func.isRequired,
  type: PropTypes.string.isRequired,
};

export default Step4;
