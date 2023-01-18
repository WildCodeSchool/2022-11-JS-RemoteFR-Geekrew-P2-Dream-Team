import React from "react";
import PropTypes from "prop-types";

function EmotionPicker({ setSelectedEmotion, selectedEmotion }) {
  return (
    <select
      className="bg-filterCloud flex text-xs text-grey bg-gradient-blue-d bg-center w-[80px] h-[65px] bg-contain bg-no-repeat"
      name="selectedType"
      onChange={(e) => setSelectedEmotion(e.target.value)}
      value={selectedEmotion}
    >
      <option className="dropdown-item text-white" value="">
        Émotion
      </option>
      <option className="dropdown-item text-white" value="JOIE">
        Joie
      </option>
      <option className="dropdown-item text-white" value="AMOUR">
        Amour
      </option>
      <option className="dropdown-item text-white" value="AMUSEMENT">
        Amusement
      </option>
      <option className="dropdown-item text-white" value="SERENITE">
        Sérénité
      </option>
      <option className="dropdown-item text-white" value="CULPABILITE">
        Culpabilité
      </option>
      <option className="dropdown-item text-white" value="PEUR">
        Peur
      </option>
      <option className="dropdown-item text-white" value="COLERE">
        Colère
      </option>
      <option className="dropdown-item text-white" value="TRISTESSE">
        Tristesse
      </option>
    </select>
  );
}

EmotionPicker.propTypes = {
  selectedEmotion: PropTypes.string.isRequired,
  setSelectedEmotion: PropTypes.func.isRequired,
};

export default EmotionPicker;
