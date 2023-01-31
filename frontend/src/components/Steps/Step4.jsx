import PropTypes from "prop-types";

function Step4({
  onSelectMeteo,
  type,
  handleBackgrounds,
  handleMouseOver,
  handleMouseOut,
  background,
}) {
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
      <h1 className="text-white font-cinzel text-2xl mb-10 pl-5 md:pl-0">
        Choisissez votre type de météo
      </h1>
      {type === "reve" ? (
        <div className="relative">
          <div className="z-50 bg-noise-pattern flex flex-col justify-center items-center border-solid border-2 border-medium-grey rounded-xl h-[32rem] w-[20rem] md:w-[40rem]" />
          <div className="absolute top-0 flex flex-col justify-center items-center h-full w-full">
            {positiveMeteos.map(({ value, label }) => (
              <button
                key={value}
                type="button"
                className="z-10 flex bg-yellow justify-center py-3 my-5 md:py-4 md:my-7 rounded-full font-sans md:text-2xl text-xl text-white font-thin w-3/6"
                onClick={() => handleMeteoChange(value)}
                onMouseOver={() => handleMouseOver({ value, label })}
                onFocus={() => handleMouseOver}
                onMouseOut={handleMouseOut}
                onBlur={() => handleMouseOut}
              >
                {label}
              </button>
            ))}
          </div>
          <div
            key={background}
            className={`absolute bg-center bg-origin-border w-full h-full top-0 border-solid border-2 border-medium-grey rounded-xl ${handleBackgrounds()}`}
          />
        </div>
      ) : (
        <div className="relative">
          <div className="z-50 bg-noise-pattern flex flex-col justify-center items-center border-solid border-2 border-medium-grey rounded-xl h-[32rem] w-[20rem] md:w-[40rem]" />
          <div className="absolute top-0 flex flex-col justify-center items-center h-full w-full">
            {negativeMeteos.map(({ value, label }) => (
              <button
                key={value}
                type="button"
                className="z-10 flex bg-yellow justify-center py-3 my-5 md:py-4 md:my-7 rounded-full font-sans md:text-2xl text-xl text-white font-thin w-3/6"
                onClick={() => handleMeteoChange(value)}
                onMouseOver={() => handleMouseOver({ value, label })}
                onFocus={() => handleMouseOver}
                onMouseOut={handleMouseOut}
                onBlur={() => handleMouseOut}
              >
                {label}
              </button>
            ))}
          </div>
          <div
            key={background}
            className={`absolute bg-center bg-origin-border w-full h-full top-0 border-solid border-2 border-medium-grey rounded-xl ${handleBackgrounds()}`}
          />
        </div>
      )}
    </div>
  );
}
Step4.propTypes = {
  onSelectMeteo: PropTypes.func.isRequired,
  type: PropTypes.string.isRequired,
  handleBackgrounds: PropTypes.func.isRequired,
  handleMouseOut: PropTypes.func.isRequired,
  handleMouseOver: PropTypes.func.isRequired,
  background: PropTypes.string.isRequired,
};

export default Step4;
