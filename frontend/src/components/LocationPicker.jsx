import React from "react";
import PropTypes from "prop-types";

function LocationPicker({ setSelectedLocation, selectedLocation }) {
  return (
    <select
      className="bg-filterCloud flex text-xs text-grey bg-gradient-blue-d bg-center w-[80px] h-[65px] bg-contain bg-no-repeat"
      name="selectedType"
      onChange={(e) => setSelectedLocation(e.target.value)}
      value={selectedLocation}
    >
      <option className="dropdown-item text-white" value="">
        Lieu
      </option>
      <option className="dropdown-item text-white" value="CAMPAGNE">
        Campagne
      </option>
      <option className="dropdown-item text-white" value="MONTAGNE">
        Montagne
      </option>
      <option className="dropdown-item text-white" value="MER">
        Mer
      </option>
      <option className="dropdown-item text-white" value="VILLE">
        Ville
      </option>
    </select>
  );
}

LocationPicker.propTypes = {
  selectedLocation: PropTypes.string.isRequired,
  setSelectedLocation: PropTypes.func.isRequired,
};
export default LocationPicker;