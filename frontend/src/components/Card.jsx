import PropTypes from "prop-types";

function Card({ elem, handlePopUpOn }) {
  return (
    <button
      key={elem.id}
      className="flex flex-col items-center md:items-start w-5/12 md:w-1/5 md:mx-2 rounded-xl my-2 md:my-4 py-2 max-w-w-max-card md:max-w-none "
      type="button"
      onClick={() => handlePopUpOn(elem.id)}
    >
      <img
        className="aspect-square w-11/12 md:max-h-64 rounded-xl"
        src={elem.url}
        alt={elem.description}
      />
      <span className="hidden font-base font-medium md:text-left md:pt-2 md:flex">
        {elem.description.length > 65
          ? `${elem.description.substring(0, 68)} ...`
          : elem.description}
      </span>
      <h4 className="hidden">{elem.type}</h4>
      <span className="hidden ">{elem.emotion}</span>
      <span className="hidden">{elem.lieu}</span>
      <span className="hidden">{elem.meteo}</span>
      {elem.type === "reve" && (
        <span className="flex flex-row items-baseline text-white my-1">
          <p className="font-medium pt-2 text-xl mr-1">30 000 {"  "}</p>
          <p className="font-normal pt-2 text-xs"> {"  "}dreameez</p>
        </span>
      )}
      {elem.type === "cauchemar" && (
        <span className="flex flex-row items-baseline text-white my-1">
          <p className="font-medium text-xl mr-1">5000 {"  "}</p>
          <p className="font-normal text-xs"> {"  "}dreameez</p>
        </span>
      )}
    </button>
  );
}

Card.propTypes = {
  elem: PropTypes.shape().isRequired,
  handlePopUpOn: PropTypes.func.isRequired,
};

export default Card;
