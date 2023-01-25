import { React, useState } from "react";

import PropTypes from "prop-types";
import data from "../../csvjson.json";
import SearchBar from "./SearchBar";
import TypePicker from "./TypePicker";
import PopUpCard from "./PopUpCard";
import Card from "./Card";
import EmotionPicker from "./EmotionPicker";
import LocationPicker from "./LocationPicker";
import WeatherPicker from "./WeatherPicker";

function CardsList({ setAddToCart, addToCart }) {
  const [search, setSearch] = useState(" ");
  const [selectedValue, setSelectedValue] = useState("");
  const [selectedEmotion, setSelectedEmotion] = useState("");
  const [selectedWeather, setSelectedWeather] = useState("");
  const [selectedLocation, setSelectedLocation] = useState("");
  const [popUp, setPopUp] = useState(
    data.map((elem) => ({ ...elem, quantity: 0 }))
  );

  const handlePopUpOn = (id) => {
    setPopUp(
      popUp.filter((card) => {
        if (card.id === id) return card;
        return null;
      })
    );
  };

  function handlePopUpOff() {
    setPopUp(data);
  }

  return (
    <div className="flex flex-col justify-center z-10">
      <div>
        <PopUpCard
          popUp={popUp}
          onClose={() => handlePopUpOff()}
          addToCart={addToCart}
          setAddToCart={setAddToCart}
        />
      </div>
      <div className="font-sans text-white flex flex-row flex-wrap w-full justify-evenly">
        <div className="flex flex-col  md:flex-row md:items-center md:justify-around flex-nowrap w-full md:w-10/12">
          <div className="mb-2">
            <SearchBar search={search} setSearch={setSearch} />
          </div>

          <div className="flex w-full justify-evenly">
            <TypePicker
              setSelectedValue={setSelectedValue}
              selectedValue={selectedValue}
            />
            <EmotionPicker
              setSelectedEmotion={setSelectedEmotion}
              selectedEmotion={selectedEmotion}
            />
            <LocationPicker
              setSelectedLocation={setSelectedLocation}
              selectedLocation={selectedLocation}
            />
            <WeatherPicker
              setSelectedWeather={setSelectedWeather}
              selectedWeather={selectedWeather}
            />
          </div>
        </div>
        {data.filter((elem) => elem.description.includes(search)).length ===
        0 ? (
          <div> Aucun rêve trouvé </div>
        ) : (
          data
            .filter((elem) => elem.description.includes(search))
            .filter((elem) =>
              selectedValue.length !== 0
                ? elem.type === selectedValue
                : elem.type
            )
            .filter((elem) =>
              selectedEmotion.length !== 0
                ? elem.emotion === selectedEmotion
                : elem.emotion
            )
            .filter((elem) =>
              selectedLocation.length !== 0
                ? elem.lieu === selectedLocation
                : elem.lieu
            )
            .filter((elem) =>
              selectedWeather.length !== 0
                ? elem.meteo === selectedWeather
                : elem.meteo
            )

            .map((elem) => {
              return (
                <Card
                  handlePopUpOn={handlePopUpOn}
                  elem={elem}
                  key={elem.id + 1}
                />
              );
            })
        )}
      </div>
    </div>
  );
}
CardsList.propTypes = {
  addToCart: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      name: PropTypes.string,
      quantity: PropTypes.number.isRequired,
    })
  ).isRequired,
  setAddToCart: PropTypes.func.isRequired,
};
export default CardsList;
