import { useNavigate } from "react-router-dom";
import Lune from "../assets/Lune.svg";
import Botcloud from "../assets/botcloud.svg";
import backcloud1 from "../assets/backcloud1.svg";
import backcloud2 from "../assets/backcloud2.svg";

function Stars() {
  const navigate = useNavigate();

  return (
    <div className="flex content-center justify-center items-center h-[calc(100vh-12rem)]">
      <img
        src={Lune}
        alt="Lune"
        className="fixed right-1/5 top-1/5 scale-75 md:scale-100 md:right-1/5 md:top-1/5"
      />
      <div className="flex flex-col items-center">
        <h1 className="font-cinzel md:text-8xl text-6xl  text-white">Oniriq</h1>
        <h2 className="font-sans md:text-2xl text-xl text-white font-thin mb-8">
          Ici, on vend du rêve
        </h2>
        <button
          onClick={() => navigate("/Experience")}
          type="button"
          className="flex hover:border-2 hover:border-yellow hover:bg-transparent bg-yellow border-2 border-yellow z-10 px-8 py-4 rounded-full font-sans md:text-2xl text-xl text-white font-thin"
        >
          Démarrer l'experience
        </button>
      </div>
      <img
        src={Botcloud}
        alt="Cloud"
        className="fixed z-0 scale-20 bottom-0 left-0 md:w-3/5"
      />
      <img
        src={backcloud1}
        alt="backcloud"
        className="fixed w-2/5 bottom-80 md:w-1/5 z-0 md:top-60 left-0 animate-move"
      />
      <img
        src={backcloud2}
        alt="backcloud"
        className="fixed w-2/5 bottom-60 md:w-1/5 z-0 md:top-60 right-0 animate-move"
      />
    </div>
  );
}

export default Stars;
