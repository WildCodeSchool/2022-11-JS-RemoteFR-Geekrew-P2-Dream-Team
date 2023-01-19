import React from "react";
import PropTypes from "prop-types";

function LocationPicker({ setSelectedLocation, selectedLocation }) {
  const options = [
    { value: "", label: "Lieu" },
    { value: "campagne", label: "Campagne" },
    { value: "montagne", label: "Montagne" },
    { value: "mer", label: "Mer" },
    { value: "ville", label: "Ville" },
  ];

  return (
    <select
      aria-label="State"
      className="bg-filterCloud flex text-xs text-grey bg-gradient-blue-d bg-center w-[80px] h-[65px] bg-contain bg-no-repeat"
      name="selectedType"
      onChange={(e) => setSelectedLocation(e.target.value)}
      value={selectedLocation}
    >

      {options.map(({ value, label }) => (
        <option className="dropdown-item text-white" key={value} value={value}>
          {label}
        </option>
      ))}

    </select>
  );
}

LocationPicker.propTypes = {
  selectedLocation: PropTypes.string.isRequired,
  setSelectedLocation: PropTypes.func.isRequired,
};
export default LocationPicker;
