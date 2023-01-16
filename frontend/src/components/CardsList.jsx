import { React, useState } from "react";

import data from "../../csvjson.json";
import SearchBar from "./SearchBar";
import PopUpCard from "./PopUpCard";
import Card from "./Card";

function CardsList() {
  const [search, setSearch] = useState(" ");
  const [popUp, setPopUp] = useState(data);

  const handlePopUpOn = (ID) => {
    setPopUp(
      popUp.filter((card) => {
        if (card.ID === ID) return card;
        return null;
      })
    );
  };

  function handlePopUpOff() {
    setPopUp(data);
  }

  return (
    <div className="flex flex-col justify-center bg-gradient-to-b from-gradient-blue-d to-gradient-blue-m ">
      <div>
        <PopUpCard popUp={popUp} onClose={() => handlePopUpOff()} />
      </div>
      <div className="font-sans text-white flex flex-row flex-wrap w-full justify-evenly bg-gradient-to-b from-gradient-blue-d to-gradient-blue-m md:px-6">
        <div className=" flex justify-between flex-nowrap w-full items-center">
          <SearchBar search={search} setSearch={setSearch} />
        </div>
        {data.filter((elem) => elem.DESCRIPTION.includes(search)).length ===
        0 ? (
          <div> Aucun rêve trouvé </div>
        ) : (
          data
            .filter((elem) => elem.DESCRIPTION.includes(search))
            .map((elem) => {
              return <Card handlePopUpOn={handlePopUpOn} elem={elem} />;
            })
        )}
      </div>
    </div>
  );
}

export default CardsList;
