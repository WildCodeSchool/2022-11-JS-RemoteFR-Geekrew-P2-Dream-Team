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
    <div className="flex bg-filterCloud bg-center bg-no-repeat h-16 bg-contain justify-center w-20">
      <select
        aria-label="State"
        className="flex text-xs text-center text-grey bg-transparent "
        name="selectedType"
        onChange={(e) => setSelectedLocation(e.target.value)}
        value={selectedLocation}
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

LocationPicker.propTypes = {
  selectedLocation: PropTypes.string.isRequired,
  setSelectedLocation: PropTypes.func.isRequired,
};
export default LocationPicker;
