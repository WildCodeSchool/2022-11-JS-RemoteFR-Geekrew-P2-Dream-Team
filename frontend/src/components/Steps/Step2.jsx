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
    <div className="flex flex-col justify-center items-center">
      <h1 className="text-white font-cinzel text-2xl">
        Choisissez votre type d'émotion
      </h1>
      {type === "reve" ? (
        <div className="z-50 bg-noise-pattern flex flex-col justify-center items-center border-solid border-2 border-medium-grey h-[32rem] w-[20rem] md:w-[40rem]">
          {positiveEmotions.map(({ value, label }) => (
            <button
              key={value}
              type="button"
              className="z-50 flex bg-yellow justify-center py-3 my-5 md:py-4 md:my-7 rounded-full font-sans md:text-2xl text-xl text-white font-thin w-3/6"
              onClick={() => handleEmotionChange(value)}
            >
              {label}
            </button>
          ))}
        </div>
      ) : (
        <div className="z-50 bg-noise-pattern flex flex-col justify-center items-center border-solid border-2 border-medium-grey h-[32rem] w-[20rem] md:w-[40rem]">
          {negativeEmotions.map(({ value, label }) => (
            <button
              key={value}
              type="button"
              className="z-50 flex bg-yellow justify-center py-3 my-5 md:py-4 md:my-7 rounded-full font-sans md:text-2xl text-xl text-white font-thin w-3/6"
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
