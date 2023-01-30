import React, { useEffect, useRef } from "react";
import PropTypes from "prop-types";

function CreateStar({ size, positionX, positionY }) {
  const starRef = useRef(null);

  useEffect(() => {
    starRef.current.style.top = `${positionY}px`;
    starRef.current.style.left = `${positionX}px`;
    starRef.current.style.height = `${size}px`;
    starRef.current.style.width = `${size}px`;
  }, [positionX, positionY, size]);

  return (
    <div
      ref={starRef}
      className="bg-white fixed h-full rounded-full animate-glow"
    />
  );
}

CreateStar.propTypes = {
  size: PropTypes.number.isRequired,
  positionX: PropTypes.number.isRequired,
  positionY: PropTypes.number.isRequired,
};

export default CreateStar;
