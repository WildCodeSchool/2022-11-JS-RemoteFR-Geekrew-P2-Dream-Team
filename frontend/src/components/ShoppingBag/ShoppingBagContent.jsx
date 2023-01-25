import React from "react";
import PropTypes from "prop-types";
import Counter from "./Counter";
import trash from "../../assets/icons/trash2.svg";

function ShoppingBagContent({ addToCart, setAddToCart }) {
  return (
    <div className="flex flex-col items-center justify-between w-10/12 my-4 md:mt-4 md:mb-8">
      {addToCart.map((dream) => {
        return (
          <div key={dream.id} className="flex w-full">
            <div className="flex flex-row justify-between mb-2 md:w-full">
              <img
                src={dream.url}
                alt="dream"
                className="w-[100px] h-[100px] my-1 aspect-square"
              />
              <div className="flex flex-col justify-between text-white md:text-black max-h-[100px] max-w-[50%] md:max-w-[60%] md:min-w-[235px] lg:min-w-[424px]">
                <h2 className="text-sm font-medium">
                  Mon {dream.type === "reve" ? "Rêve" : "Cauchemar"}
                </h2>
                <p className="text-[10px] font-light text-medium-grey md:text-black">
                  {dream.description.length > 120
                    ? `${dream.description.substring(0, 120)} ...`
                    : dream.description}
                </p>
                <div className="flex flex-row text-gradient-blue-d">
                  <Counter
                    dream={dream}
                    addToCart={addToCart}
                    setAddToCart={setAddToCart}
                  />
                  <button
                    type="button"
                    className="text-light-yellow mx-4"
                    onClick={() =>
                      setAddToCart(
                        addToCart.filter(
                          (dreamToDelete) => dreamToDelete.id !== dream.id
                        )
                      )
                    }
                  >
                    <img src={trash} alt="delete" />
                  </button>
                </div>
              </div>
              <div className="flex flex-col text-white md:text-black items-end">
                <p className="text-sm font-medium whitespace-nowrap">
                  {dream.type === "reve" ? 30000 : 5000}
                </p>
                <p className="text-[0.5rem]">dreameez</p>
              </div>
            </div>
          </div>
        );
      })}
      <div className="flex flex-row w-11/12 my-2 md:mt-8">
        <input
          value=""
          readOnly
          placeholder="entrez votre code promo"
          className="w-9/12 text-center rounded-l-3xl py-2"
        />
        <button
          type="button"
          className="w-4/12 px-2 text-grey rounded-r-3xl bg-light-grey"
        >
          {" "}
          Appliquer{" "}
        </button>
      </div>
    </div>
  );
}

ShoppingBagContent.propTypes = {
  addToCart: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      name: PropTypes.string,
      quantity: PropTypes.number.isRequired,
    })
  ).isRequired,
  setAddToCart: PropTypes.func.isRequired,
};

export default ShoppingBagContent;
