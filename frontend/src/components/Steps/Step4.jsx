import PropTypes from "prop-types";

function Step4({ onSelectMeteo, type }) {
  const handleMeteoChange = (meteo) => {
    onSelectMeteo(meteo);
  };

  return (
    <div>
      <h1 className="text-white font-cinzel text-2xl">
        Choisissez votre type d'émotion
      </h1>
      {type === "REVE" ? (
        <div className="flex flex-col">
          <button
            type="button"
            className=" bg-yellow z-10 px-8 py-4 mt-7 rounded-full font-sans md:text-1xl text-xl text-white font-thin"
            onClick={() => handleMeteoChange("CHALEUR")}
          >
            Chaleur
          </button>
          <button
            type="button"
            className=" bg-yellow z-10 px-8 py-4 mt-7 rounded-full font-sans md:text-1xl text-xl text-white font-thin"
            onClick={() => handleMeteoChange("PLUIE")}
          >
            Pluie
          </button>
          <button
            type="button"
            className=" bg-yellow z-10 px-8 py-4 mt-7 rounded-full font-sans md:text-1xl text-xl text-white font-thin"
            onClick={() => handleMeteoChange("FROID")}
          >
            Froid
          </button>
        </div>
      ) : (
        <div className="flex flex-col">
          <button
            type="button"
            className=" bg-yellow z-10 px-8 py-4 mt-7 rounded-full font-sans md:text-1xl text-xl text-white font-thin"
            onClick={() => handleMeteoChange("CANICULE")}
          >
            Canicule
          </button>
          <button
            type="button"
            className=" bg-yellow z-10 px-8 py-4 mt-7 rounded-full font-sans md:text-1xl text-xl text-white font-thin"
            onClick={() => handleMeteoChange("TEMPETE")}
          >
            Tempête
          </button>
          <button
            type="button"
            className=" bg-yellow z-10 px-8 py-4 mt-7 rounded-full font-sans md:text-1xl text-xl text-white font-thin"
            onClick={() => handleMeteoChange("GLACIAL")}
          >
            Glacial
          </button>
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
