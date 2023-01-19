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
      <option className="dropdown-item text-white" value="joie">
        Joie
      </option>
      <option className="dropdown-item text-white" value="amour">
        Amour
      </option>
      <option className="dropdown-item text-white" value="amusement">
        Amusement
      </option>
      <option className="dropdown-item text-white" value="serenite">
        Sérénité
      </option>
      <option className="dropdown-item text-white" value="culpabilite">
        Culpabilité
      </option>
      <option className="dropdown-item text-white" value="peur">
        Peur
      </option>
      <option className="dropdown-item text-white" value="colere">
        Colère
      </option>
      <option className="dropdown-item text-white" value="tristesse">
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
