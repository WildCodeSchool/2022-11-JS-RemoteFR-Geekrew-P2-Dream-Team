import PropTypes from "prop-types";

function Step4({ onSelectMeteo, type }) {
  const handleMeteoChange = (meteo) => {
    onSelectMeteo(meteo);
  };

  const positiveMeteos = [
    { value: "chaleur", label: "Chaleur" },
    { value: "pluvieux", label: "Pluvieux" },
    { value: "froid", label: "Froid" },
  ];
  const negativeMeteos = [
    { value: "canicule", label: "Canicule" },
    { value: "tempete", label: "Tempête" },
    { value: "glacial", label: "Glacial" },
  ];

  return (
    <div className="flex flex-col justify-center items-center">
      <h1 className="text-white font-cinzel text-2xl">
        Choisissez votre type d'émotion
      </h1>
      {type === "reve" ? (
        <div className="z-50 bg-noise-pattern flex flex-col justify-center items-center border-solid border-2 border-medium-grey h-[32rem] w-[20rem] md:w-[40rem]">
          {positiveMeteos.map(({ value, label }) => (
            <button
              key={value}
              type="button"
              className="z-50 flex bg-yellow justify-center py-3 my-5 md:py-4 md:my-7 rounded-full font-sans md:text-2xl text-xl text-white font-thin w-3/6"
              onClick={() => handleMeteoChange(value)}
            >
              {label}
            </button>
          ))}
        </div>
      ) : (
        <div className="z-50 bg-noise-pattern flex flex-col justify-center items-center border-solid border-2 border-medium-grey h-[32rem] w-[20rem] md:w-[40rem]">
          {negativeMeteos.map(({ value, label }) => (
            <button
              key={value}
              type="button"
              className="z-50 flex bg-yellow justify-center py-3 my-5 md:py-4 md:my-7 rounded-full font-sans md:text-2xl text-xl text-white font-thin w-3/6"
              onClick={() => handleMeteoChange(value)}
            >
              {label}
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
