import PropTypes from "prop-types";

function Step3({ onSelectLoc, emotion }) {
  const handleLocChange = (Loc) => {
    onSelectLoc(Loc);
  };
  const locations = ["Mer", "Ville", "Montagne"];

  return (
    <div>
      <h1 className="text-white font-cinzel text-2xl">
        Choisissez votre type de lieu
      </h1>
      <div className=" bg-noise-pattern mt-3 px-5 flex flex-col justify-center border-solid border-2 border-medium-grey h-[32rem]">
        {locations.map((location) => (
          <button
            key={location}
            type="button"
            className=" bg-yellow px-8 py-4 mt-7 rounded-full font-sans md:text-1xl text-xl text-white font-thin"
            onClick={() => handleLocChange(location.toUpperCase())}
          >
            {location}
          </button>
        ))}
        {emotion === "PEUR" ? (
          <button
            type="button"
            className=" bg-yellow z-10 px-8 py-4 mt-7 rounded-full font-sans md:text-1xl text-xl text-white font-thin"
            onClick={() => handleLocChange("FORET")}
          >
            Forêt
          </button>
        ) : (
          <button
            type="button"
            className=" bg-yellow z-10 px-8 py-4 mt-7 rounded-full font-sans md:text-1xl text-xl text-white font-thin"
            onClick={() => handleLocChange("CAMPAGNE")}
          >
            Campagne
          </button>
        )}
      </div>
    </div>
  );
}
Step3.propTypes = {
  onSelectLoc: PropTypes.func.isRequired,
  emotion: PropTypes.string.isRequired,
};

export default Step3;
