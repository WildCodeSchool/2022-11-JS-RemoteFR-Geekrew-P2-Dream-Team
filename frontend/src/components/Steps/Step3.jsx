import PropTypes from "prop-types";

function Step3({
  onSelectLoc,
  handleBackgrounds,
  handleMouseOver,
  handleMouseOut,
  background,
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
      <h1 className="text-white font-cinzel text-2xl mb-10 pl-5 md:pl-0">
        Choisissez votre type de lieu
      </h1>
      <div className="relative">
        <div className="z-50 bg-noise-pattern flex flex-col justify-center items-center border-solid border-2 border-medium-grey rounded-xl h-[32rem] w-[20rem] md:w-[40rem]" />
        <div className="absolute top-0 flex flex-col justify-center items-center h-full w-full">
          {locations.map(({ value, label }) => (
            <button
              key={value}
              type="button"
              className="z-10 flex bg-yellow justify-center py-3 my-5 md:py-4 md:my-7 rounded-full font-sans md:text-2xl text-xl text-white font-thin w-3/6"
              onMouseOver={() => handleMouseOver({ value, label })}
              onFocus={() => handleMouseOver}
              onClick={() => {
                handleLocChange({ value, label });
              }}
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
    </div>
  );
}
Step3.propTypes = {
  onSelectLoc: PropTypes.func.isRequired,
  handleBackgrounds: PropTypes.func.isRequired,
  handleMouseOut: PropTypes.func.isRequired,
  handleMouseOver: PropTypes.func.isRequired,
  background: PropTypes.string.isRequired,
};

export default Step3;
