import PropTypes from "prop-types";

function Step3({
  onSelectLoc,
  handleBackgrounds,
  handleMouseOver,
  handleMouseOut,
}) {
  const handleLocChange = (Loc) => {
    onSelectLoc(Loc);
  };
  const locations = [
    { value: "mer", label: "Mer" },
    { value: "ville", label: "Ville" },
    { value: "montagne", label: "Montagne" },
    { value: "campagne", label: "Campagne" },
  ];

  return (
    <div className="flex flex-col justify-center items-center">
      <h1 className="text-white font-cinzel text-2xl">
        Choisissez votre type de lieu
      </h1>
      <div
        className={`transition-all duration-300 ease-in bg-center bg-origin-border z-50 bg-noise-pattern flex flex-col justify-center items-center border-solid border-2 border-medium-grey rounded-xl h-[32rem] w-[20rem] md:w-[40rem] ${handleBackgrounds()}`}
        onMouseOut={handleMouseOut}
        onBlur={() => handleMouseOut}
      >
        {locations.map(({ value, label }) => (
          <button
            key={value}
            type="button"
            className="z-50 flex bg-yellow justify-center py-3 my-5 md:py-4 md:my-7 rounded-full font-sans md:text-2xl text-xl text-white font-thin w-3/6"
            onClick={() => handleLocChange(value)}
            onMouseOver={() => handleMouseOver({ value, label })}
            onFocus={() => handleMouseOver}
          >
            {label}
          </button>
        ))}
      </div>
    </div>
  );
}
Step3.propTypes = {
  onSelectLoc: PropTypes.func.isRequired,
  handleBackgrounds: PropTypes.func.isRequired,
  handleMouseOut: PropTypes.func.isRequired,
  handleMouseOver: PropTypes.func.isRequired,
};

export default Step3;
