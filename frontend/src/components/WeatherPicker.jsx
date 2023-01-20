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
    <select
      aria-label="State"
      className="bg-filterCloud flex text-xs text-grey bg-gradient-blue-d bg-center w-[80px] h-[65px] bg-contain bg-no-repeat"
      name="selectedType"
      onChange={(e) => setSelectedWeather(e.target.value)}
      value={selectedWeather}
    >
      {options.map(({ value, label }) => (
        <option className="dropdown-item text-white" key={value} value={value}>
          {label}
        </option>
      ))}
    </select>
  );
}

WeatherPicker.propTypes = {
  selectedWeather: PropTypes.string.isRequired,
  setSelectedWeather: PropTypes.func.isRequired,
};

export default WeatherPicker;
