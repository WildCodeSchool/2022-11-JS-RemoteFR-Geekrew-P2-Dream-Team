import PropTypes from "prop-types";

function Step2({ onSelectEmotion, type }) {
  const handleEmotionChange = (emotion) => {
    onSelectEmotion(emotion);
  };

  return (
    <div>
      <h1 className="text-white font-cinzel text-2xl">
        Choisissez votre type d'émotion
      </h1>
      {type === "REVE" ? (
        <div className="flex flex-col">
          <button
            type="button"
            className=" bg-yellow z-10 px-8 py-4 mt-7 rounded-full font-sans md:text-1xl text-xl text-white font-thin"
            onClick={() => handleEmotionChange("JOIE")}
          >
            Joie
          </button>
          <button
            type="button"
            className=" bg-yellow z-10 px-8 py-4 mt-7 rounded-full font-sans md:text-1xl text-xl text-white font-thin"
            onClick={() => handleEmotionChange("AMOUR")}
          >
            Amour
          </button>
          <button
            type="button"
            className=" bg-yellow z-10 px-8 py-4 mt-7 rounded-full font-sans md:text-1xl text-xl text-white font-thin"
            onClick={() => handleEmotionChange("SERENITE")}
          >
            Sérénité
          </button>
          <button
            type="button"
            className=" bg-yellow z-10 px-8 py-4 mt-7 rounded-full font-sans md:text-1xl text-xl text-white font-thin"
            onClick={() => handleEmotionChange("AMUSEMENT")}
          >
            Amusement
          </button>
        </div>
      ) : (
        <div className="flex flex-col">
          <button
            type="button"
            className=" bg-yellow z-10 px-8 py-4 mt-7 rounded-full font-sans md:text-1xl text-xl text-white font-thin"
            onClick={() => handleEmotionChange("CULPABILITE")}
          >
            Culpabilité
          </button>
          <button
            type="button"
            className=" bg-yellow z-10 px-8 py-4 mt-7 rounded-full font-sans md:text-1xl text-xl text-white font-thin"
            onClick={() => handleEmotionChange("COLERE")}
          >
            Colère
          </button>
          <button
            type="button"
            className=" bg-yellow z-10 px-8 py-4 mt-7 rounded-full font-sans md:text-1xl text-xl text-white font-thin"
            onClick={() => handleEmotionChange("TRISTESSE")}
          >
            Tristesse
          </button>
          <button
            type="button"
            className=" bg-yellow z-10 px-8 py-4 mt-7 rounded-full font-sans md:text-1xl text-xl text-white font-thin"
            onClick={() => handleEmotionChange("PEUR")}
          >
            Peur
          </button>
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
