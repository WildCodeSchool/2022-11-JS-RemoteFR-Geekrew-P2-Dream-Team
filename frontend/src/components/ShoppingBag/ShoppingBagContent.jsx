import React, { useState } from "react";
import Counter from "./Counter";
import trash from "../../assets/icons/trash2.svg";

function ShoppingBagContent() {
  const [count, setCount] = useState(0);

  return (
    <div className="flex flex-col items-center justify-between w-10/12 my-4 md:mt-4 md:mb-8">
      <div className="flex justify-center w-full">
        <div className="flex flex-row justify-between">
          <img
            src="https://lexica-serve-encoded-images2.sharif.workers.dev/md/bb8e2184-b8fb-4032-a49c-0fe8f60e07f1"
            alt="dream"
            className="w-[100px] h-[100px] my-1 aspect-square"
          />
          <div className="flex flex-col justify-between text-white md:text-black max-h-[100px] max-w-[50%]">
            <h2 className="text-sm font-medium">Mon Rêve</h2>
            <p className="text-[10px] font-light text-medium-grey md:text-black">
              Je suis devant la cheminée d’un chalet de haute montagne à boire
              mon chocolat chaud ...
            </p>
            <div className="flex flex-row text-gradient-blue-d">
              <Counter count={count} setCount={setCount} />
              <button type="button" className="text-light-yellow mx-4">
                <img src={trash} alt="delete" />
              </button>
            </div>
          </div>
          <div className="flex flex-col text-white md:text-black items-end">
            <p className="text-sm font-medium whitespace-nowrap">30 000</p>
            <p className="text-[0.5rem]">dreameez</p>
          </div>
        </div>
      </div>
      <div className="flex justify-center my-2 md:my-6">
        <div className="flex flex-row justify-between">
          <img
            src="https://lexica-serve-encoded-images2.sharif.workers.dev/md/bb8e2184-b8fb-4032-a49c-0fe8f60e07f1"
            alt="dream"
            className="w-[100px] h-[100px] my-1 aspect-square"
          />
          <div className="flex flex-col justify-between text-white md:text-black max-h-[100px] max-w-[50%]">
            <h2 className="text-sm font-medium">Mon Cauchemar</h2>
            <p className="text-[10px] font-light text-medium-grey md:text-black">
              Je suis devant la cheminée d’un chalet de haute montagne à boire
              mon chocolat chaud ...
            </p>
            <div className="flex flex-row text-gradient-blue-d">
              <Counter count={count} setCount={setCount} />
              <button type="button" className="text-light-yellow mx-4">
                <img src={trash} alt="delete" />
              </button>
            </div>
          </div>
          <div className="flex flex-col text-white md:text-black items-end">
            <p className="text-sm font-medium whitespace-nowrap">5 000</p>
            <p className="text-[0.5rem]">dreameez</p>
          </div>
        </div>
      </div>
      <div className="flex flex-row w-11/12 my-2 md:mt-8">
        <input
          value=""
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

export default ShoppingBagContent;
