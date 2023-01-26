import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

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
      src: "./src/assets/images-carousel/img-carousel1.png",
    },
    {
      id: 2,
      src: "./src/assets/images-carousel/img-carousel2.png",
    },
    {
      id: 3,
      src: "./src/assets/images-carousel/img-carousel3.png",
    },
    {
      id: 4,
      src: "./src/assets/images-carousel/img-carousel4.png",
    },
    {
      id: 5,
      src: "./src/assets/images-carousel/img-carousel5.png",
    },
    {
      id: 6,
      src: "./src/assets/images-carousel/img-carousel6.png",
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
          src="./src/assets/images-carousel/img-carousel1.png"
          alt="Enchanted forest"
        />
        <img
          className="object-none animate-move "
          src="./src/assets/images-carousel/img-carousel2.png"
          alt="Frozen river"
        />
        <img
          className="object-none animate-move relative top-7 "
          src="./src/assets/images-carousel/img-carousel3.png"
          alt="Mountain lac"
        />
        <img
          className="object-none animate-move relative "
          src="./src/assets/images-carousel/img-carousel4.png"
          alt="Ocean and bridge"
        />
        <img
          className="object-none animate-move relative top-4"
          src="./src/assets/images-carousel/img-carousel5.png"
          alt="Ocean and sand"
        />
        <img
          className="object-none max-[1280px]:hidden animate-move relative top-2
          "
          src="./src/assets/images-carousel/img-carousel6.png"
          alt="Cloud in the sky"
        />
      </div>
    </>
  );
}

export default Slider;
