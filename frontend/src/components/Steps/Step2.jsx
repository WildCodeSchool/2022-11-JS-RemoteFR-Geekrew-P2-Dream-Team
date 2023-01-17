import PropTypes from "prop-types";

function Step2({ onSelectEmotion, type }) {
  const handleEmotionChange = (emotion) => {
    onSelectEmotion(emotion);
  };

  const positiveEmotions = ["Joie", "Amour", "Serenite", "Amusement"];
  const negativeEmotions = ["Culpabilite", "Colere", "Tristesse", "Peur"];

  return (
    <div>
      <h1 className="text-white font-cinzel text-2xl">
        Choisissez votre type d'émotion
      </h1>
      {type === "REVE" ? (
        <div className="flex flex-col">
          {positiveEmotions.map((emotion) => (
            <button
              key={emotion}
              type="button"
              className=" bg-yellow px-8 py-4 mt-7 rounded-full font-sans md:text-1xl text-xl text-white font-thin"
              onClick={() => handleEmotionChange(emotion.toUpperCase())}
            >
              {emotion}
            </button>
          ))}
        </div>
      ) : (
        <div className="flex flex-col">
          {negativeEmotions.map((emotion) => (
            <button
              key={emotion}
              type="button"
              className=" bg-yellow px-8 py-4 mt-7 rounded-full font-sans md:text-1xl text-xl text-white font-thin"
              onClick={() => handleEmotionChange(emotion.toUpperCase())}
            >
              {emotion}
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
