import PropTypes from "prop-types";

import CreateStar from "./CreateStar";

function CreateStarGroup({ amount }) {
  const stars = [];
  for (let i = 0; i < amount; i += 1) {
    const positionX = Math.random() * window.innerWidth;
    const positionY = Math.random() * window.innerHeight;
    const size = Math.random() * 5;

    stars.push(
      <CreateStar
        key={i}
        size={size}
        positionX={positionX}
        positionY={positionY}
      />
    );
  }

  return <div className="h-full">{stars}</div>;
}

CreateStarGroup.propTypes = {
  amount: PropTypes.number.isRequired,
};

export default CreateStarGroup;
