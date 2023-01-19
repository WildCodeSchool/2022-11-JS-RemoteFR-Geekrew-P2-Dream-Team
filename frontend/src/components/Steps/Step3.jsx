import PropTypes from "prop-types";

function Step3({ onSelectLoc }) {
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
    <div>
      <h1 className="text-white font-cinzel text-2xl">
        Choisissez votre type de lieu
      </h1>
      <div className=" bg-noise-pattern mt-3 px-5 flex flex-col justify-center border-solid border-2 border-medium-grey h-[32rem]">
        {locations.map(({ value, label }) => (
          <button
            key={value}
            type="button"
            className=" bg-yellow px-8 py-4 mt-7 rounded-full font-sans md:text-1xl text-xl text-white font-thin"
            onClick={() => handleLocChange(value)}
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
};

export default Step3;
