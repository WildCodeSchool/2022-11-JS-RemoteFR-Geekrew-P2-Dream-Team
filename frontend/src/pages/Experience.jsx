import { useState } from "react";
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

  const [isStep1, setIsStep1] = useState(true);
  const [isStep2, setIsStep2] = useState(false);
  const [isStep3, setIsStep3] = useState(false);
  const [isStep4, setIsStep4] = useState(false);
  const [isFinish, setIsFinish] = useState(false);

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
    <div>
      {isStep1 && <Step1 onSelectType={handleType} />}
      {isStep2 && <Step2 onSelectEmotion={handleEmotion} type={type.value} />}
      {isStep3 && <Step3 onSelectLoc={handleLoc} emotion={emotion} />}
      {isStep4 && <Step4 onSelectMeteo={handleMeteo} type={type.value} />}

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
