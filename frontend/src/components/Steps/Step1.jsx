import PropTypes from "prop-types";

function Step1({ onSelectType }) {
  const handleTypeChange = (type) => {
    onSelectType(type);
  };

  const types = [
    { value: "reve", label: "Rêve" },
    { value: "cauchemar", label: "Cauchemar" },
  ];

  return (
    <div className="flex flex-col justify-center items-center">
      <h1 className="text-white font-cinzel text-2xl">
        Choisissez votre type de rêve
      </h1>
      <div className="z-50 bg-noise-pattern flex flex-col justify-center items-center border-solid border-2 border-medium-grey h-[32rem] w-[20rem] md:w-[40rem]">
        {types.map(({ value, label }) => (
          <button
            key={value}
            type="button"
            className="z-50 flex bg-yellow justify-center py-3 my-5 md:py-4 md:my-7 rounded-full font-sans md:text-2xl text-xl text-white font-thin w-3/6"
            onClick={() => handleTypeChange({ value, label })}
          >
            {label}
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
