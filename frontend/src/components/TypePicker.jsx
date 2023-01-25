import React from "react";
import PropTypes from "prop-types";

export default function TypePicker({ selectedValue, setSelectedValue }) {
  const options = [
    { value: "", label: "Type" },
    { value: "reve", label: "Rêve" },
    { value: "cauchemar", label: "Cauchemar" },
  ];

  return (
    <div className="flex bg-filterCloud bg-center bg-no-repeat h-16 bg-cover justify-center w-20">
      <select
        aria-label="State"
        className="flex text-xs text-center text-grey bg-transparent "
        name="selectedType"
        onChange={(e) => setSelectedValue(e.target.value)}
        value={selectedValue}
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
TypePicker.propTypes = {
  selectedValue: PropTypes.string.isRequired,
  setSelectedValue: PropTypes.func.isRequired,
};
