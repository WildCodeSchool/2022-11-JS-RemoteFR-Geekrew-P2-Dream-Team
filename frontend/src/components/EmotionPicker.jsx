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
    <select
      aria-label="State"
      className="bg-filterCloud flex text-xs text-grey bg-gradient-blue-d bg-center w-[80px] h-[65px] bg-contain bg-no-repeat"
      name="selectedType"
      onChange={(e) => setSelectedEmotion(e.target.value)}
      value={selectedEmotion}
    >
      {options.map(({ value, label }) => (
        <option className="dropdown-item text-white" key={value} value={value}>
          {label}
        </option>
      ))}
    </select>
  );
}

EmotionPicker.propTypes = {
  selectedEmotion: PropTypes.string.isRequired,
  setSelectedEmotion: PropTypes.func.isRequired,
};

export default EmotionPicker;
