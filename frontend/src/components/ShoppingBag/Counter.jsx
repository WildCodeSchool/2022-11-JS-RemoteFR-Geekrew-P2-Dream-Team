import PropTypes from "prop-types";

function Counter({ count, setCount }) {
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
  count: PropTypes.number.isRequired,
  setCount: PropTypes.func.isRequired,
};

export default Counter;
