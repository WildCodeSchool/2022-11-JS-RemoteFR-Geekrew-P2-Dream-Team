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
      <div className="bg-noise-pattern mt-3 px-5 flex flex-col justify-center border-solid border-2 border-medium-grey h-[32rem]">
        {types.map((type) => (
          <button
            key={type}
            type="button"
            className=" bg-yellow justify-center py-4 my-7 rounded-full font-sans md:text-1xl text-xl text-white font-thin"
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
