import React from "react";
import Slider from "../components/Slider";
import Staff from "../components/Staff";

function Apropos() {
  return (
    <div className="flex flex-col md:justify-evenly">
      <title className="flex justify-around items-end my-4 md:my-8">
        <h1 className="font-cinzel md:text-8xl text-4xl  text-white">Oniriq</h1>
        <h2 className="font-sans md:text-xl text-lg text-white ">
          Ici, on vend du rêve
        </h2>
      </title>
      <Slider />
      <div className="font-sans text-white text-left md:my-10 md:mx-20 flex flex-col">
        <p className="m-6 text-lg md:text-xl">
          Parce qu’on ne rêve jamais assez, on vous emmène aux pays des rêves!
          Plongez dans une expérience immersive et maîtrisez vos rêves et
          cauchemars.
        </p>
        <h2 className="m-6 font-cinzel text-2xl text-left">Le saviez-vous ?</h2>
        <p className="m-6 text-lg md:text-xl">
          Les rêves s’effacent rapidement. Seulement 5 minutes après le réveil,
          50% du souvenir d’un rêve serait perdu. Après 10 minutes, 90% du rêve
          aurait disparu. Oniriq est la solution!
        </p>
        <h2 className="m-6 font-cinzel text-2xl text-left">
          Les Vendeurs de Rêves
        </h2>
        <div>
          <br />
          <Staff />
        </div>
      </div>
    </div>
  );
}

export default Apropos;
