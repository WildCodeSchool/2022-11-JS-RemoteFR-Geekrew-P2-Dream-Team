import React from "react";
import PropTypes from "prop-types";

export default function TypePicker({ selectedValue, setSelectedValue }) {
  return (
    <select
      className="bg-filterCloud flex text-xs text-grey bg-gradient-blue-d bg-center w-[80px] h-[65px] bg-contain bg-no-repeat"
      name="selectedType"
      onChange={(e) => setSelectedValue(e.target.value)}
      value={selectedValue}
    >
      <option className="dropdown-item text-white w-full" value="">
        Type
      </option>
      <option className="dropdown-item text-white w-full" value="REVE">
        Rêve
      </option>
      <option className="dropdown-item text-white w-full" value="CAUCHEMAR">
        Cauchemar
      </option>
    </select>
  );
}
TypePicker.propTypes = {
  selectedValue: PropTypes.string.isRequired,
  setSelectedValue: PropTypes.func.isRequired,
};
