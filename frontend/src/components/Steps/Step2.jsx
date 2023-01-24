import PropTypes from "prop-types";

function Step2({ onSelectEmotion, type }) {
  const handleEmotionChange = (emotion) => {
    onSelectEmotion(emotion);
  };
  const positiveEmotions = [
    { value: "joie", label: "Joie" },
    { value: "amour", label: "Amour" },
    { value: "serenite", label: "Sérénité" },
    { value: "amusement", label: "Amusement" },
  ];
  const negativeEmotions = [
    { value: "culpabilite", label: "Culpabilité" },
    { value: "colere", label: "Colère" },
    { value: "tristesse", label: "Tristesse" },
    { value: "peur", label: "Peur" },
  ];

  return (
    <div>
      <h1 className="text-white font-cinzel text-2xl">
        Choisissez votre type d'émotion
      </h1>
      {type === "reve" ? (
        <div className="bg-noise-pattern mt-3 px-5 flex flex-col justify-center border-solid border-2 border-medium-grey h-[32rem]">
          {positiveEmotions.map(({ value, label }) => (
            <button
              key={value}
              type="button"
              className="z-50 bg-yellow px-8 py-4 mt-7 rounded-full font-sans md:text-1xl text-xl text-white font-thin"
              onClick={() => handleEmotionChange(value)}
            >
              {label}
            </button>
          ))}
        </div>
      ) : (
        <div className="bg-noise-pattern mt-3 px-5 flex flex-col justify-center border-solid border-2 border-medium-grey h-[32rem]">
          {negativeEmotions.map(({ value, label }) => (
            <button
              key={value}
              type="button"
              className="z-50 bg-yellow px-8 py-4 mt-7 rounded-full font-sans md:text-1xl text-xl text-white font-thin"
              onClick={() => handleEmotionChange(value)}
            >
              {label}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
Step2.propTypes = {
  onSelectEmotion: PropTypes.func.isRequired,
  type: PropTypes.string.isRequired,
};

export default Step2;
