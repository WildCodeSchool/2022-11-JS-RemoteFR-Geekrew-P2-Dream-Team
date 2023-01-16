import React from "react";
import PropTypes from "prop-types";
import cloud from "../assets/Cloud/cloud.svg";

function WeatherPicker({ setSelectedWeather, selectedWeather }) {
  return (
    <select
      className="scroll-selector2 text-grey bg-gradient-blue-d bg-center bg-contain bg-no-repeat h-16 w-16"
      style={{ backgroundImage: `url(${cloud})` }}
      name="selectedType"
      onChange={(e) => setSelectedWeather(e.target.value)}
      value={selectedWeather}
    >
      <option className="dropdown-item text-white" value="">
        Météo
      </option>
      <option className="dropdown-item text-white" value="Chaleur">
        Chaleur
      </option>
      <option className="dropdown-item text-white" value="Pluvieux">
        Pluvieux
      </option>
      <option className="dropdown-item text-white" value="Froid">
        Froid
      </option>
      <option className="dropdown-item text-white" value="Glacial">
        Glacial
      </option>
      <option className="dropdown-item text-white" value="Tempête">
        Tempête
      </option>
      <option className="dropdown-item text-white" value="Canicule">
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
