import PropTypes from "prop-types";
import substraction from "../../assets/icons/substractionIcon.svg";
import addition from "../../assets/icons/additionIcon.svg";

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
    <div className="button bg-light-yellow text-sm rounded-3xl whitespace-nowrap w-full md:ml-2 py-1">
      <button
        className="md:p-2 md:pl-3"
        type="button"
        onClick={() => handleQuantityLess()}
      >
        <img src={substraction} alt="substraction" />
      </button>
      {dream.quantity}
      <button
        className="md:p-2"
        type="button"
        onClick={() => handleQuantityMore()}
      >
        <img src={addition} alt="addition" />
      </button>
    </div>
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
