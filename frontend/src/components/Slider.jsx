import React from "react";
import Carousel from "react-multi-carousel";
import Carousel1 from "../assets/images-carousel/img-carousel1.png";
import Carousel2 from "../assets/images-carousel/img-carousel2.png";
import Carousel3 from "../assets/images-carousel/img-carousel3.png";
import Carousel4 from "../assets/images-carousel/img-carousel4.png";
import Carousel5 from "../assets/images-carousel/img-carousel5.png";
import Carousel6 from "../assets/images-carousel/img-carousel6.png";

function Slider() {
  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 4,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 3,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 2,
    },
  };
  const imgCarousel = [
    {
      id: 1,
      src: { Carousel1 },
    },
    {
      id: 2,
      src: { Carousel2 },
    },
    {
      id: 3,
      src: { Carousel3 },
    },
    {
      id: 4,
      src: { Carousel4 },
    },
    {
      id: 5,
      src: { Carousel5 },
    },
    {
      id: 6,
      src: { Carousel6 },
    },
  ];
  return (
    <>
      <div className="lg:hidden">
        <Carousel
          responsive={responsive}
          arrows={false}
          infinite
          showDots
          minimumTouchDrag={20}
        >
          {imgCarousel.map((slide) => (
            <div className="flex justify-center animate-pulse" key={slide.id}>
              <img src={slide.src} alt={slide.desc} />
            </div>
          ))}
        </Carousel>
      </div>
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
    </>
  );
}

export default Slider;
