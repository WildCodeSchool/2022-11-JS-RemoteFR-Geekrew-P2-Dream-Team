import React from "react";
import Carousel1 from "../assets/images-carousel/img-carousel1.png";
import Carousel2 from "../assets/images-carousel/img-carousel2.png";
import Carousel3 from "../assets/images-carousel/img-carousel3.png";
import Carousel4 from "../assets/images-carousel/img-carousel4.png";
import Carousel5 from "../assets/images-carousel/img-carousel5.png";
import Carousel6 from "../assets/images-carousel/img-carousel6.png";

function Slider() {
  return (
    <>
      <div className="max-[1024px]:hidden lg:flex justify-evenly h-96 z-50">
        <img
          className="object-none animate-move  relative top-3"
          src={Carousel1}
          alt="Enchanted forest"
        />
        <img
          className="object-none animate-move "
          src={Carousel2}
          alt="Frozen river"
        />
        <img
          className="object-none animate-move relative top-7 "
          src={Carousel3}
          alt="Mountain lac"
        />
        <img
          className="object-none animate-move relative "
          src={Carousel4}
          alt="Ocean and bridge"
        />
        <img
          className="object-none animate-move relative top-4"
          src={Carousel5}
          alt="Ocean and sand"
        />
        <img
          className="object-none max-[1280px]:hidden animate-move relative top-2
          "
          src={Carousel6}
          alt="Cloud in the sky"
        />
      </div>

      <div className="lg:hidden flex justify-evenly h-96 z-50">
        <img
          className="object-none animate-move  relative top-3"
          src={Carousel1}
          alt="Enchanted forest"
        />
        <img
          className="object-none animate-move "
          src={Carousel2}
          alt="Frozen river"
        />
        <img
          className="hidden md:block object-none animate-move relative top-7 "
          src={Carousel3}
          alt="Mountain lac"
        />
        <img
          className="hidden md:block object-none animate-move relative "
          src={Carousel4}
          alt="Ocean and bridge"
        />
      </div>
    </>
  );
}

export default Slider;
