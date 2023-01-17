import { React, useState } from "react";

import data from "../../csvjson.json";
import SearchBar from "./SearchBar";
import TypePicker from "./TypePicker";
import Card from "./Card";
import EmotionPicker from "./EmotionPicker";
import LocationPicker from "./LocationPicker";
import WeatherPicker from "./WeatherPicker";

function CardsList() {
  const [search, setSearch] = useState(" ");
  const [selectedValue, setSelectedValue] = useState("");
  const [selectedEmotion, setSelectedEmotion] = useState("");
  const [selectedWeather, setSelectedWeather] = useState("");
  const [selectedLocation, setSelectedLocation] = useState("");

  return (
    <div className="flex flex-col justify-center bg-gradient-to-b from-gradient-blue-d to-gradient-blue-m ">
      <div>
        <div className="font-sans text-white flex flex-row flex-wrap w-full justify-evenly bg-gradient-to-b from-gradient-blue-d to-gradient-blue-m md:px-6">
          <div className="md:flex-row   flex flex-col  justify-between flex-nowrap w-full items-center">
            <div className="justify-start">
              <SearchBar search={search} setSearch={setSearch} />
            </div>

            <div className="flex justify-end">
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
          {data.filter((elem) => elem.DESCRIPTION.includes(search)).length ===
          0 ? (
            <div> Aucun rêve trouvé </div>
          ) : (
            data
              .filter((elem) => elem.DESCRIPTION.includes(search))
              .filter((elem) =>
                selectedValue.length !== 0
                  ? elem.TYPE === selectedValue
                  : elem.TYPE
              )
              .filter((elem) =>
                selectedEmotion.length !== 0
                  ? elem.EMOTION === selectedEmotion
                  : elem.EMOTION
              )
              .filter((elem) =>
                selectedLocation.length !== 0
                  ? elem.LIEU === selectedLocation
                  : elem.LIEU
              )
              .filter((elem) =>
                selectedWeather.length !== 0
                  ? elem.METEO === selectedWeather
                  : elem.METEO
              )

              .map((elem) => {
                return <Card elem={elem} />;
              })
          )}
        </div>
      </div>
    </div>
  );
}

export default CardsList;
