import PropTypes from "prop-types";
import dreams from "../../csvjson.json";

function Revelation({ type, emotion, loc, meteo }) {
  const dream = dreams.find(
    (d) =>
      d["TYPE DE REVE"] === type &&
      d.EMOTION === emotion &&
      d.LIEU === loc &&
      d.METEO === meteo
  );

  return (
    <div>
      <img src={dream.URL} alt={`${type} ${emotion} ${loc} ${meteo}`} />
    </div>
  );
}

Revelation.propTypes = {
  type: PropTypes.string.isRequired,
  emotion: PropTypes.string.isRequired,
  loc: PropTypes.string.isRequired,
  meteo: PropTypes.string.isRequired,
};

export default Revelation;
