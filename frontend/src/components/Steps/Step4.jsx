import PropTypes from "prop-types";

function Step4({ onSelectMeteo, type }) {
  const handleMeteoChange = (meteo) => {
    onSelectMeteo(meteo);
  };

  const positiveMeteos = ["chaleur", "pluvieux", "froid"];
  const negativeMeteos = ["canicule", "tempete", "glacial"];

  return (
    <div>
      <h1 className="text-white font-cinzel text-2xl">
        Choisissez votre type d'émotion
      </h1>
      {type === "reve" ? (
        <div className=" bg-noise-pattern mt-3 px-5 flex flex-col justify-center border-solid border-2 border-medium-grey h-[32rem]">
          {positiveMeteos.map((meteo) => (
            <button
              key={meteo}
              type="button"
              className=" bg-yellow px-8 py-4 mt-7 rounded-full font-sans md:text-1xl text-xl text-white font-thin"
              onClick={() => handleMeteoChange(meteo)}
            >
              {meteo}
            </button>
          ))}
        </div>
      ) : (
        <div className="bg-noise-pattern mt-3 px-5 flex flex-col justify-center border-solid border-2 border-medium-grey h-[32rem]">
          {negativeMeteos.map((meteo) => (
            <button
              key={meteo}
              type="button"
              className=" bg-yellow px-8 py-4 mt-7 rounded-full font-sans md:text-1xl text-xl text-white font-thin"
              onClick={() => handleMeteoChange(meteo)}
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
