import React from "react";
import PropTypes from "prop-types";

export default function TypePicker({ selectedValue, setSelectedValue }) {
  const options = [
    { value: "", label: "Type" },
    { value: "reve", label: "Rêve" },
    { value: "cauchemar", label: "Cauchemar" },
  ];

  return (
    <select
      aria-label="State"
      className="bg-filterCloud flex text-xs text-center text-grey bg-gradient-blue-d bg-center w-[80px] h-[65px] bg-contain bg-no-repeat"
      name="selectedType"
      onChange={(e) => setSelectedValue(e.target.value)}
      value={selectedValue}
    >
      {options.map(({ value, label }) => (
        <option className="dropdown-item text-white" key={value} value={value}>
          {label}
        </option>
      ))}
    </select>
  );
}
TypePicker.propTypes = {
  selectedValue: PropTypes.string.isRequired,
  setSelectedValue: PropTypes.func.isRequired,
};
