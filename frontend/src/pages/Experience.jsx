import { useState, useEffect } from "react";
import PropTypes from "prop-types";

import Step1 from "../components/Steps/Step1";
import Step2 from "../components/Steps/Step2";
import Step3 from "../components/Steps/Step3";
import Step4 from "../components/Steps/Step4";
import Revelation from "../components/Revelation";

function Experience({ addToCart, setAddToCart }) {
  const [type, setType] = useState();
  const [emotion, setEmotion] = useState();
  const [loc, setLoc] = useState();
  const [meteo, setMeteo] = useState();
  const [background, setBackground] = useState("initial");

  const [isStep1, setIsStep1] = useState(true);
  const [isStep2, setIsStep2] = useState(false);
  const [isStep3, setIsStep3] = useState(false);
  const [isStep4, setIsStep4] = useState(false);
  const [isFinish, setIsFinish] = useState(false);
  const backgrounds = [
    { type: "reve", bg: "bg-reve-exp" },
    { type: "cauchemar", bg: "bg-cauchemar-exp" },
    { type: "joie", bg: "bg-joie-exp" },
    { type: "amour", bg: "bg-amour-exp" },
    { type: "serenite", bg: "bg-serenite-exp" },
    { type: "amusement", bg: "bg-amusement-exp" },
    { type: "culpabilite", bg: "bg-culpabilite-exp" },
    { type: "colere", bg: "bg-colere-exp" },
    { type: "tristesse", bg: "bg-tristesse-exp" },
    { type: "peur", bg: "bg-peur-exp" },
    { type: "mer", bg: "bg-mer-exp" },
    { type: "ville", bg: "bg-ville-exp" },
    { type: "montagne", bg: "bg-montagne-exp" },
    { type: "campagne", bg: "bg-campagne-exp" },
    { type: "chaleur", bg: "bg-chaleur-exp" },
    { type: "pluvieux", bg: "bg-pluvieux-exp" },
    { type: "froid", bg: "bg-froid-exp" },
    { type: "canicule", bg: "bg-canicule-exp" },
    { type: "tempete", bg: "bg-tempete-exp" },
    { type: "glacial", bg: "bg-glacial-exp" },
  ];
  useEffect(() => {
    setBackground("initial");
  }, [isStep1, isStep2, isStep3, isStep4]);
  const handleBackgrounds = () => {
    const backgroundObject = backgrounds.find(
      (elem) => elem.type === background
    );
    return backgroundObject ? backgroundObject.bg : "initial";
  };
  const handleMouseOver = (elem) => {
    setBackground(elem.value);
  };

  const handleMouseOut = () => {
    setBackground("initial");
  };

  const handleType = (typeValue) => {
    setType(typeValue);
    setIsStep1(false);
    setIsStep2(true);
  };
  const handleEmotion = (emotionValue) => {
    setEmotion(emotionValue);
    setIsStep2(false);
    setIsStep3(true);
  };
  const handleLoc = (locValue) => {
    setLoc(locValue);
    setIsStep3(false);
    setIsStep4(true);
  };
  const handleMeteo = (meteoValue) => {
    setMeteo(meteoValue);
    setIsStep4(false);
    setIsFinish(true);
  };

  return (
    <div className="z-10 flex justify-center items-center h-[calc(100vh-12rem)] ">
      {isStep1 && (
        <Step1
          onSelectType={handleType}
          backgrounds={backgrounds}
          handleBackgrounds={handleBackgrounds}
          setBackground={setBackground}
          handleMouseOver={handleMouseOver}
          handleMouseOut={handleMouseOut}
        />
      )}
      {isStep2 && (
        <Step2
          onSelectEmotion={handleEmotion}
          type={type.value}
          backgrounds={backgrounds}
          handleBackgrounds={handleBackgrounds}
          setBackground={setBackground}
          handleMouseOver={handleMouseOver}
          handleMouseOut={handleMouseOut}
        />
      )}
      {isStep3 && (
        <Step3
          onSelectLoc={handleLoc}
          emotion={emotion}
          backgrounds={backgrounds}
          handleBackgrounds={handleBackgrounds}
          setBackground={setBackground}
          handleMouseOver={handleMouseOver}
          handleMouseOut={handleMouseOut}
        />
      )}
      {isStep4 && (
        <Step4
          onSelectMeteo={handleMeteo}
          type={type.value}
          backgrounds={backgrounds}
          handleBackgrounds={handleBackgrounds}
          setBackground={setBackground}
          handleMouseOver={handleMouseOver}
          handleMouseOut={handleMouseOut}
        />
      )}

      {isFinish && (
        <Revelation
          type={type}
          emotion={emotion}
          loc={loc}
          meteo={meteo}
          addToCart={addToCart}
          setAddToCart={setAddToCart}
        />
      )}
    </div>
  );
}

Experience.propTypes = {
  addToCart: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      name: PropTypes.string,
      quantity: PropTypes.number.isRequired,
    })
  ).isRequired,
  setAddToCart: PropTypes.func.isRequired,
};

export default Experience;
