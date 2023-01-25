import React from "react";
import PropTypes from "prop-types";

function WeatherPicker({ setSelectedWeather, selectedWeather }) {
  const options = [
    { value: "", label: "Météo" },
    { value: "chaleur", label: "Chaleur" },
    { value: "pluvieux", label: "Pluvieux" },
    { value: "froid", label: "Froid" },
    { value: "glacial", label: "Glacial" },
    { value: "tempete", label: "Tempête" },
    { value: "canicule", label: "Canicule" },
  ];

  return (
    <div className="flex bg-filterCloud bg-center bg-no-repeat h-16 bg-cover justify-center w-20">
      <select
        aria-label="State"
        className="flex text-xs text-center text-grey bg-transparent "
        name="selectedType"
        onChange={(e) => setSelectedWeather(e.target.value)}
        value={selectedWeather}
      >
        {options.map(({ value, label }) => (
          <option
            className="dropdown-item text-white"
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

WeatherPicker.propTypes = {
  selectedWeather: PropTypes.string.isRequired,
  setSelectedWeather: PropTypes.func.isRequired,
};

export default WeatherPicker;
