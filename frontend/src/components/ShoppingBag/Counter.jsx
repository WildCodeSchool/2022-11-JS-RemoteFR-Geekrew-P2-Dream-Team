import PropTypes from "prop-types";
import { useState } from "react";

function Counter({ dream }) {
  const [count, setCount] = useState(dream.quantity);

  return (
    <p>
      <button
        type="button"
        className="button bg-light-yellow text-sm rounded-3xl whitespace-nowrap w-full px-2 py-1"
        onClick={() => setCount((oldCount) => oldCount + 1)}
      >
        - {count} +
      </button>
    </p>
  );
}

Counter.propTypes = {
  dream: PropTypes.func.isRequired,
};

export default Counter;
