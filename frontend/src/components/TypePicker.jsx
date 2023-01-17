import React from "react";
import PropTypes from "prop-types";

export default function TypePicker({ selectedValue, setSelectedValue }) {
  return (
    <select
      className="scroll-selector2 bg-filterCloud text-xs text-grey bg-gradient-blue-d bg-center bg-contain bg-no-repeat h-16"
      name="selectedType"
      onChange={(e) => setSelectedValue(e.target.value)}
      value={selectedValue}
    >
      <option className="dropdown-item text-white" value="">
        Type
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
