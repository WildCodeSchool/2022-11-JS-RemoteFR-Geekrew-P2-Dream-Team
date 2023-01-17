import PropTypes from "prop-types";

function Step1({ onSelectType }) {
  const handleTypeChange = (type) => {
    onSelectType(type);
  };

  const types = ["Reve", "Cauchemar"];

  return (
    <div>
      <h1 className="text-white font-cinzel text-2xl">
        Choisissez votre type de rêve
      </h1>
      <div className="mt-3 flex flex-col border-solid border-2 border-medium-grey ">
        {types.map((type) => (
          <button
            key={type}
            type="button"
            className=" bg-yellow px-8 py-4 mt-7 rounded-full font-sans md:text-1xl text-xl text-white font-thin"
            onClick={() => handleTypeChange(type.toUpperCase())}
          >
            {type}
          </button>
        ))}
      </div>
    </div>
  );
}
Step1.propTypes = {
  onSelectType: PropTypes.func.isRequired,
};

export default Step1;
