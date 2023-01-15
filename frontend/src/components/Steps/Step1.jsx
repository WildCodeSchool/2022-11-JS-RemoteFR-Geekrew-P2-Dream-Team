import PropTypes from "prop-types";

function Step1({ onSelectType }) {
  const handleTypeChange = (type) => {
    onSelectType(type);
  };

  return (
    <div>
      <h1 className="text-white font-cinzel text-2xl">
        Choisissez votre type de rêve
      </h1>
      <div className="flex flex-col">
        <button
          type="button"
          className=" bg-yellow z-10 px-8 py-4 mt-7 rounded-full font-sans md:text-1xl text-xl text-white font-thin"
          onClick={() => handleTypeChange("REVE")}
        >
          Rêve
        </button>
        <button
          type="button"
          className=" bg-yellow z-10 px-8 py-4 mt-7 rounded-full font-sans md:text-1xl text-xl text-white font-thin"
          onClick={() => handleTypeChange("CAUCHEMAR")}
        >
          Cauchemar
        </button>
      </div>
    </div>
  );
}
Step1.propTypes = {
  onSelectType: PropTypes.func.isRequired,
};

export default Step1;
