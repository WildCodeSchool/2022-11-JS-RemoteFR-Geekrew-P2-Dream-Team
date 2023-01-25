import React, { useState } from "react";
import PropTypes from "prop-types";
import close from "../assets/icons/x.svg";

function PopUpCard({ popUp, onClose, addToCart, setAddToCart }) {
  if (popUp.length !== 1) return null;

  const [isInCart, setIsInCart] = useState(false);

  popUp.flat();

  const handleClick = (item) => {
    setIsInCart(() => true);
    if (!isInCart || addToCart.includes(!item[0].id)) {
      setAddToCart((add) => [
        ...add,
        {
          id: popUp[0].id,
          type: popUp[0].type,
          description: popUp[0].description,
          url: popUp[0].url,
          quantity: +1,
        },
      ]);
    } else {
      setAddToCart(
        addToCart.map((popUpDream) => {
          // Create a *new* object with changes
          return { ...popUpDream, quantity: popUpDream.quantity + 1 };
        })
      );
    }
    // addToCart.filter((el) => éliminer les doublons)
  };

  return (
    <div className="overlay bg-gradient-blue-d md:bg-blue md:bg-opacity-30 fixed w-full h-full md:h-full backdrop-blur-sm ">
      <div className="modal container max-w-lg md:max-h-[80%] fixed top-2/4 left-2/4 -translate-y-2/4 -translate-x-2/4 flex flex-col items-center md:items-end justify-between py-12 md:bg-white rounded-xl px-12 md:px-0">
        <div className="flex w-11/12  flex-col items-center md:pr-[10%]">
          {popUp.map((card) => {
            return (
              <img
                className="image md:aspect-square md:w-8/12 object-contain"
                src={card.url}
                alt="reve"
                key={card.url}
              />
            );
          })}

          <div className="modalRight flex flex-col items-center md:items-end">
            <button
              type="button"
              onClick={onClose}
              className="closed button fixed top-8 right-8 text-white md:text-gradient-blue-d"
            >
              <img
                src={close}
                alt="cross"
                className="closed button fixed md:p-3 top-8 right-8 text-white md:text-gradient-blue-d"
              />
            </button>
            <div className="content flex flex-col justify-around items-between my-8">
              {popUp.map((card) => {
                return (
                  <div
                    className="flex flex-col justify-between"
                    key={card.id * 0.5}
                  >
                    <h1 className="font-sans text-base md:w-11/12 md:text-center	 mt-8 md:mt-4 text text-white md:text-gradient-blue-d">
                      {card.description}
                    </h1>
                    <div className="flex flex-row items-baseline justify-between w-5/12 ">
                      <div className="flex">
                        <span className="font-sans font-medium text-base mt-8 md:mt-4 text-white md:hidden">
                          {card.type === "reve" ? "30" : "5"}
                        </span>
                        <span className="font-sans font-medium text-base mt-8 md:mt-4 text-white md:hidden">
                          000{" "}
                        </span>
                      </div>
                      <span className="font-sans text-sm mt-8 md:mt-4 text-white md:hidden ml-2">
                        {" "}
                        dreameez
                      </span>
                    </div>
                  </div>
                );
              })}
            </div>
            <div className="flex flex-col">
              <button
                type="button"
                className="bg-yellow font-sans text-xl font-medium text-white flex justify-between whitespace-nowrap items-center md:mx-[5%] px-4 py-4 rounded-3xl"
                onClick={() => handleClick(popUp)}
              >
                <svg
                  className="fill-none stroke-white stroke-2 w-full"
                  width="24"
                  height="24"
                  viewBox="0 0 18 18"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M14.25 8.25H3.75C2.92157 8.25 2.25 8.92157 2.25 9.75V15C2.25 15.8284 2.92157 16.5 3.75 16.5H14.25C15.0784 16.5 15.75 15.8284 15.75 15V9.75C15.75 8.92157 15.0784 8.25 14.25 8.25Z" />
                  <path d="M5.25 8.25V5.25C5.25 4.25544 5.64509 3.30161 6.34835 2.59835C7.05161 1.89509 8.00544 1.5 9 1.5C9.99456 1.5 10.9484 1.89509 11.6517 2.59835C12.3549 3.30161 12.75 4.25544 12.75 5.25V8.25" />
                </svg>

                <p className="pl-[4%]">Débloquez ce rêve!</p>
              </button>
              <div className="bg-green-500 z-40 text-green p-2 rounded-lg animate-pulse m-4">
                {isInCart ? (
                  <p className="text-center">
                    Votre article a été ajouté au panier
                  </p>
                ) : null}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

PopUpCard.propTypes = {
  addToCart: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      name: PropTypes.string,
      quantity: PropTypes.number.isRequired,
    })
  ).isRequired,
  setAddToCart: PropTypes.func.isRequired,
  popUp: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      type: PropTypes.string.isRequired,
      description: PropTypes.string.isRequired,
      quantity: PropTypes.number,
      url: PropTypes.string.isRequired,
    })
  ).isRequired,
  onClose: PropTypes.func.isRequired,
};

export default PopUpCard;
