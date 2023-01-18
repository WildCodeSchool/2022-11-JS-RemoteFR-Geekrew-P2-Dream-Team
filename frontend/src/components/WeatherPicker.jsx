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
      <option className="dropdown-item text-white" value="CHALEUR">
        Chaleur
      </option>
      <option className="dropdown-item text-white" value="PLUVIEUX">
        Pluvieux
      </option>
      <option className="dropdown-item text-white" value="FROID">
        Froid
      </option>
      <option className="dropdown-item text-white" value="GLACIAL">
        Glacial
      </option>
      <option className="dropdown-item text-white" value="TEMPETE">
        Tempête
      </option>
      <option className="dropdown-item text-white" value="CANICULE">
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
