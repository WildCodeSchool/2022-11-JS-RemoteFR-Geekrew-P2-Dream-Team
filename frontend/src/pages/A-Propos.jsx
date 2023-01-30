import React from "react";
import Slider from "../components/Slider";
import Staff from "../components/Staff";

function Apropos() {
  return (
    <div className="mx-5 z-10 flex flex-col md:justify-evenly md:mx-20">
      <title className="flex justify-around items-end my-4 md:my-8">
        <h1 className="font-cinzel md:text-8xl text-4xl  text-white">Oniriq</h1>
        <h2 className="font-sans md:text-xl text-lg text-white ">
          Ici, on vend du rêve
        </h2>
      </title>
      <Slider />
      <div className="font-sans text-white text-left flex flex-col xl:mx-20">
        <p className="pt-7 text-lg md:text-xl">
          Parce qu’on ne rêve jamais assez, on vous emmène aux pays des rêves!
          Plongez dans une expérience immersive et maîtrisez vos rêves et
          cauchemars.
        </p>
        <h2 className="pt-9 pb-4 font-cinzel text-2xl text-left">
          Le saviez-vous ?
        </h2>
        <p className="text-lg md:text-xl">
          Les rêves s’effacent rapidement. Seulement 5 minutes après le réveil,
          50% du souvenir d’un rêve serait perdu. Après 10 minutes, 90% du rêve
          aurait disparu. Oniriq est la solution!
        </p>
        <Staff />
      </div>
    </div>
  );
}

export default Apropos;
