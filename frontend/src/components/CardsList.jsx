import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import axios from "axios";
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
  const [popUp, setPopUp] = useState([]);

  const handlePopUpOn = (id) => {
    setPopUp(
      popUp.filter((card) => {
        if (card.id === id) return card;
        return null;
      })
    );
  };

  function handlePopUpOff() {
    setPopUp([]);
  }
  const [data, setData] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:8005/dreams").then((res) => {
      setData(res.data);
      setPopUp(res.data.map((elem) => ({ ...elem, quantity: 0 })));
    });
  }, []);

  return (
    <div className="flex flex-col justify-center ">
      <div>
        <PopUpCard
          popUp={popUp}
          onClose={() => handlePopUpOff()}
          addToCart={addToCart}
          setAddToCart={setAddToCart}
        />
      </div>
      <div className="font-sans text-white flex flex-row flex-wrap w-full justify-evenly md:px-6">
        <div className="md:flex-row   flex flex-col  items-center justify-between flex-nowrap w-full">
          <div className="">
            <SearchBar search={search} setSearch={setSearch} />
          </div>

          <div className="flex w-full justify-evenly md:w-4/5 ">
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
