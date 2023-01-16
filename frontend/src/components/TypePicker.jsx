import React from "react";
import PropTypes from "prop-types";
import cloud from "../assets/Cloud/cloud.svg";

export default function TypePicker({ selectedValue, setSelectedValue }) {
  return (
    <select
      className="scroll-selector2  text-grey bg-gradient-blue-d bg-center bg-contain bg-no-repeat h-16 w-16"
      style={{ backgroundImage: `url(${cloud})` }}
      name="selectedType"
      onChange={(e) => setSelectedValue(e.target.value)}
      value={selectedValue}
    >
      <option className="dropdown-item text-white" value="">
        Rêves
      </option>
      <option className="dropdown-item text-white" value="Rêve">
        Rêve
      </option>
      <option className="dropdown-item text-white" value="Cauchemar">
        Cauchemar
      </option>
    </select>
  );
}
TypePicker.propTypes = {
  selectedValue: PropTypes.string.isRequired,
  setSelectedValue: PropTypes.func.isRequired,
};
