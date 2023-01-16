import React from "react";
import PropTypes from "prop-types";
import cloud from "../assets/Cloud/cloud.svg";

function LocationPicker({ setSelectedLocation, selectedLocation }) {
  return (
    <select
      className="scroll-selector2 text-grey bg-gradient-blue-d bg-center bg-contain bg-no-repeat h-16 w-16"
      style={{ backgroundImage: `url(${cloud})` }}
      name="selectedType"
      onChange={(e) => setSelectedLocation(e.target.value)}
      value={selectedLocation}
    >
      <option className="dropdown-item text-white" value="">
        Lieu
      </option>
      <option className="dropdown-item text-white" value="Campagne">
        Campagne
      </option>
      <option className="dropdown-item text-white" value="Montagne">
        Montagne
      </option>
      <option className="dropdown-item text-white" value="Mer">
        Mer
      </option>
      <option className="dropdown-item text-white" value="Ville">
        Ville
      </option>
      <option className="dropdown-item text-white" value="Forêt">
        Forêt
      </option>
    </select>
  );
}

LocationPicker.propTypes = {
  selectedLocation: PropTypes.string.isRequired,
  setSelectedLocation: PropTypes.func.isRequired,
};
export default LocationPicker;
