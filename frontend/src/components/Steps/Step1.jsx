import PropTypes from "prop-types";
import dreammp3 from "../../assets/sounds/dream.mp3";
import nightmaremp3 from "../../assets/sounds/nightmare.mp3";

const types = [
  { value: "reve", label: "Rêve", url: dreammp3 },
  { value: "cauchemar", label: "Cauchemar", url: nightmaremp3 },
];
function Step1({
  onSelectType,
  handleBackgrounds,
  handleMouseOver,
  handleMouseOut,
}) {
  const handleTypeChange = (type) => {
    onSelectType(type);
    const audio = new Audio();
    audio.src = types.find((btn) => btn.value === type.value).url;
    audio.play();
  };

  return (
    <div className="flex flex-col justify-center items-center  ">
      <h1 className="text-white font-cinzel text-2xl mb-10 pl-5 md:pl-0">
        Choisissez votre type de rêve
      </h1>
      <div
        className={`z-10 bg-noise-pattern flex flex-col justify-center items-center border-solid border-2 border-medium-grey rounded-xl h-[32rem] w-[20rem] md:w-[40rem] ${handleBackgrounds()}`}
        onMouseOut={handleMouseOut}
        onBlur={() => handleMouseOut}
      >
        {types.map(({ value, label }) => (
          <button
            key={value}
            type="button"
            className="z-10 flex bg-yellow justify-center py-3 my-5 md:py-4 md:my-7 rounded-full font-sans md:text-2xl text-xl text-white font-thin w-3/6"
            onMouseOver={() => handleMouseOver({ value, label })}
            onFocus={() => handleMouseOver}
            onClick={() => {
              handleTypeChange({ value, label });
            }}
          >
            {label}
          </button>
        ))}
      </div>
      <audio id="audio">
        <track kind="captions" />
      </audio>
    </div>
  );
}

Step1.propTypes = {
  onSelectType: PropTypes.func.isRequired,
  handleBackgrounds: PropTypes.func.isRequired,
  handleMouseOut: PropTypes.func.isRequired,
  handleMouseOver: PropTypes.func.isRequired,
};

export default Step1;
