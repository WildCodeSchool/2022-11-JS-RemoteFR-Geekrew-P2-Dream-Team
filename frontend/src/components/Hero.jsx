import Lune from "../assets/Lune.svg";
import Botcloud from "../assets/botcloud.svg";
import backimg1 from "../assets/backimg1.svg";
import backimg2 from "../assets/backimg2.svg";
import backcloud1 from "../assets/backcloud1.svg";
import backcloud2 from "../assets/backcloud2.svg";
import CreateStarGroup from "./CreateStarGroup";

function Stars() {
  return (
    <div className="bg-gradient-blue-d lg:h-min h-full">
      <img
        src={Lune}
        alt="Lune"
        className="fixed right-1/5 top-1/5 scale-75 lg:scale-100 lg:right-1/5 lg:top-1/5"
      />
      <div className="flex flex-col justify-center items-center py-80">
        <h1 className="font-cinzel lg:text-8xl text-6xl  text-white">Oniriq</h1>
        <h2 className="font-sans lg:text-2xl text-xl text-white font-thin">
          Ici, on vends du rêve
        </h2>
        <button
          type="button"
          className=" bg-yellow z-10 px-8 py-4 mt-7 rounded-full font-sans lg:text-1xl text-xl text-white font-thin"
        >
          démarrer l'experience
        </button>
        <div>
          <CreateStarGroup amount={50} />
          <CreateStarGroup amount={50} />
        </div>
      </div>
      <img
        src={Botcloud}
        alt="Cloud"
        className="fixed z-0 scale-20 bottom-0 left-0 lg:w-3/5"
      />
      <img
        src={backimg1}
        alt="backimg"
        className="fixed w-3/5 lg:w-1/3 z-0 top-0 left-0"
      />
      <img
        src={backcloud1}
        alt="backcloud"
        className="fixed w-2/5 bottom-80 lg:w-1/5 z-0 lg:top-60 left-0"
      />
      <img
        src={backcloud2}
        alt="backcloud"
        className="fixed w-2/5 bottom-60 lg:w-1/5 z-0 lg:top-60 right-0"
      />
      <img
        src={backimg2}
        alt="backimg"
        className="fixed w-3/5 lg:w-1/3 z-0 right-0 bottom-40"
      />
    </div>
  );
}

export default Stars;
