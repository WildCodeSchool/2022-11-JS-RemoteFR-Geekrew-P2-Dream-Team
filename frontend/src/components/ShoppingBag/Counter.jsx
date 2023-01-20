import PropTypes from "prop-types";
import { useState } from "react";

function Counter({ dream }) {
  const [count, setCount] = useState(dream.quantity);

  function handleQuantity() {
    setCount((oldCount) => oldCount + 1);
  }

  return (
    <p>
      <button
        type="button"
        className="button bg-light-yellow text-sm rounded-3xl whitespace-nowrap w-full px-2 py-1"
      >
        <button
          type="button"
          onClick={() => setCount((oldCount) => oldCount - 1)}
        >
          -
        </button>{" "}
        {count}{" "}
        <button type="button" onClick={() => handleQuantity()}>
          +
        </button>
      </button>
    </p>
  );
}

Counter.propTypes = {
  dream: PropTypes.func.isRequired,
};

export default Counter;
