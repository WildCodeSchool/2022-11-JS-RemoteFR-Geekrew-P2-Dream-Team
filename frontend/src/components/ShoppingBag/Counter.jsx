import PropTypes from "prop-types";

function Counter({ dream, setAddToCart, addToCart }) {
  function handleQuantityMore() {
    const newDream = addToCart.map((elem) =>
      elem.id === dream.id ? { ...elem, quantity: elem.quantity + 1 } : elem
    );
    setAddToCart([...newDream]);
  }

  function handleQuantityLess() {
    const newDream = addToCart
      .map((elem) =>
        elem.id === dream.id ? { ...elem, quantity: elem.quantity - 1 } : elem
      )
      .filter((elem) => elem.quantity > 0);
    // si quantity = 0 => slice
    setAddToCart([...newDream]);
  }

  return (
    <p>
      <div className="button bg-light-yellow text-sm rounded-3xl whitespace-nowrap w-full px-2 py-1">
        <button type="button" onClick={() => handleQuantityLess()}>
          -
        </button>{" "}
        {dream.quantity}{" "}
        <button type="button" onClick={() => handleQuantityMore()}>
          +
        </button>
      </div>
    </p>
  );
}

Counter.propTypes = {
  dream: PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string,
    quantity: PropTypes.number.isRequired,
  }).isRequired,
  setAddToCart: PropTypes.func.isRequired,
  addToCart: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      name: PropTypes.string,
      quantity: PropTypes.number.isRequired,
    })
  ).isRequired,
};

export default Counter;
