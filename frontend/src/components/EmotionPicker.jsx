import React from "react";
import PropTypes from "prop-types";
import cloud from "../assets/Cloud/cloud.svg";

function EmotionPicker({ setSelectedEmotion, selectedEmotion }) {
  return (
    <select
      className="scroll-selector2  text-grey bg-gradient-blue-d bg-center bg-contain bg-no-repeat h-16 w-16"
      style={{ backgroundImage: `url(${cloud})` }}
      name="selectedType"
      onChange={(e) => setSelectedEmotion(e.target.value)}
      value={selectedEmotion}
    >
      <option className="dropdown-item text-white" value="">
        Émotion
      </option>
      <option className="dropdown-item text-white" value="Joie">
        Joie
      </option>
      <option className="dropdown-item text-white" value="Amour">
        Amour
      </option>
      <option className="dropdown-item text-white" value="Amusement">
        Amusement
      </option>
      <option className="dropdown-item text-white" value="Sérénité">
        Sérénité
      </option>
      <option className="dropdown-item text-white" value="Culpabilité">
        Culpabilité
      </option>
      <option className="dropdown-item text-white" value="Peur">
        Peur
      </option>
      <option className="dropdown-item text-white" value="COLERE">
        Colère
      </option>
      <option className="dropdown-item text-white" value="Tristesse">
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
