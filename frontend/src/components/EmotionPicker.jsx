import React from "react";
import PropTypes from "prop-types";

function EmotionPicker({ setSelectedEmotion, selectedEmotion }) {
  const options = [
    { value: "", label: "Émotion" },
    { value: "joie", label: "Joie" },
    { value: "amour", label: "Amour" },
    { value: "amusement", label: "Amusement" },
    { value: "serenite", label: "Sérénité" },
    { value: "culpabilite", label: "Culpabilité" },
    { value: "peur", label: "Peur" },
    { value: "colere", label: "Colère" },
    { value: "tristesse", label: "Tristesse" },
  ];

  return (
    <div className="flex bg-filterCloud bg-center bg-no-repeat h-16 bg-contain justify-center w-18">
      <select
        aria-label="State"
        className="flex text-xs text-center text-grey bg-transparent "
        name="selectedType"
        onChange={(e) => setSelectedEmotion(e.target.value)}
        value={selectedEmotion}
      >
        {options.map(({ value, label }) => (
          <option
            className="dropdown-item text-black"
            key={value}
            value={value}
          >
            {label}
          </option>
        ))}
      </select>
    </div>
  );
}

EmotionPicker.propTypes = {
  selectedEmotion: PropTypes.string.isRequired,
  setSelectedEmotion: PropTypes.func.isRequired,
};

export default EmotionPicker;
