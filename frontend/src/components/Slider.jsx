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
      <title className="flex justify-around items-end my-4 md:justify-evenly md:my-8">
        <h1 className="font-cinzel md:text-8xl text-4xl  text-white">Oniriq</h1>
        <h2 className="font-sans md:text-2xl text-xl text-white font-thin ">
          Ici, on vend du rêve
        </h2>
      </title>
      <div className="md:hidden">
        <Carousel
          infinite
          arrows={false}
          autoPlay
          shouldResetAutoplay
          customTransition="all 10s linear"
          pauseOnHover
          responsive={responsive}
        >
          {imgCarousel.map((slide) => (
            <div className="flex justify-center animate-pulse" key={slide.id}>
              <img className="" src={slide.src} alt={slide.desc} />
            </div>
          ))}
        </Carousel>
      </div>
      <div className="max-[768px]:hidden md:flex justify-evenly h-96">
        <img
          className="object-none animate-move  relative top-3"
          src="./src/assets/images-carousel/img-carousel1.png"
          alt=""
        />
        <img
          className="object-none animate-move "
          src="./src/assets/images-carousel/img-carousel2.png"
          alt=""
        />
        <img
          className="object-none animate-move relative top-7 "
          src="./src/assets/images-carousel/img-carousel3.png"
          alt=""
        />
        <img
          className="object-none animate-move relative "
          src="./src/assets/images-carousel/img-carousel4.png"
          alt=""
        />
        <img
          className="object-none animate-move relative top-4"
          src="./src/assets/images-carousel/img-carousel5.png"
          alt=""
        />
        <img
          className="object-none animate-move relative top-2
          "
          src="./src/assets/images-carousel/img-carousel6.png"
          alt=""
        />
      </div>
      <div className="font-sans text-white md:text-1xl text-xl font-thin flex flex-col justify-end md:items-center">
        <p className="m-4">
          Parce qu’on ne rêve jamais assez, on vous emmène aux pays des rêves!
          Plongez dans une expérience immersive et maîtrisez vos rêves et
          cauchemars.
        </p>
        <h2 className="m-4 font-bold">Le saviez-vous ?</h2>
        <p className="m-4">
          Les rêves s’effacent rapidement. Seulement 5 minutes après le réveil,
          50% du souvenir d’un rêve serait perdu. Après 10 minutes, 90% du rêve
          aurait disparu. Oniriq est la solution!
        </p>
      </div>
    </>
  );
}

export default Slider;
