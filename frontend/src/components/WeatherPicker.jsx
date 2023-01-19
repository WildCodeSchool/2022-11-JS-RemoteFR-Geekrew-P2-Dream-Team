import React from "react";
import PropTypes from "prop-types";

function WeatherPicker({ setSelectedWeather, selectedWeather }) {
  return (
    <select
      className="bg-filterCloud flex text-xs text-grey bg-gradient-blue-d bg-center w-[80px] h-[65px] bg-contain bg-no-repeat"
      name="selectedType"
      onChange={(e) => setSelectedWeather(e.target.value)}
      value={selectedWeather}
    >
      <option className="dropdown-item text-white" value="">
        Météo
      </option>
      <option className="dropdown-item text-white" value="chaleur">
        Chaleur
      </option>
      <option className="dropdown-item text-white" value="pluvieux">
        Pluvieux
      </option>
      <option className="dropdown-item text-white" value="froid">
        Froid
      </option>
      <option className="dropdown-item text-white" value="glacial">
        Glacial
      </option>
      <option className="dropdown-item text-white" value="tempete">
        Tempête
      </option>
      <option className="dropdown-item text-white" value="canicule">
        Canicule
      </option>
    </select>
  );
}

WeatherPicker.propTypes = {
  selectedWeather: PropTypes.string.isRequired,
  setSelectedWeather: PropTypes.func.isRequired,
};

export default WeatherPicker;
