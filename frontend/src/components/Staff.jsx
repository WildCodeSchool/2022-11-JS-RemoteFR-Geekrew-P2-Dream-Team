import React from "react";
import Antoine from "../assets/avatars/Antoine_Avatar.png";
import Cassandra from "../assets/avatars/Cassandra_Avatar.png";
import Julien from "../assets/avatars/Julien_Avatar.png";
import Nassima from "../assets/avatars/Nassima_Avatar.png";
import Iris from "../assets/avatars/Iris_Avatar.png";

function Staff() {
  return (
    <div>
      <h2 className="pt-9 pb-4 font-cinzel text-2xl text-left">
        Les Vendeurs de Rêves
      </h2>
      <div className="font-sans text-white flex flex-row flex-wrap lg:flex-nowrap gap-6 md:gap-0 justify-center m:justify-between">
        <div className="w-2/5">
          <img
            className="w-[100px] rounded-full "
            src={Antoine}
            alt="Antoine"
          />
          <h1 className="text-lg md:text-xl">ANTOINE</h1>
          <p>Le listeur de rêves.</p>
          <p className="underline">antoine@dream.com</p>
        </div>
        <div className="w-2/5">
          <img
            className="w-[100px] h-[100px] rounded-full"
            src={Cassandra}
            alt="Cassandra"
          />
          <h1 className="text-lg md:text-xl">CASSANDRA</h1>
          <p>
            Vous emmène dans les nuages
            <br className="hidden md:block" /> ou les étoiles.
          </p>

          <p className="underline">cassandra@dream.com</p>
        </div>
        <div className="w-2/5">
          <img
            className="w-[100px] h-[100px] rounded-full"
            src={Iris}
            alt="Iris"
          />
          <h1 className="text-lg md:text-xl">IRIS</h1>
          <p>Passe à la caisse avec elle.</p>
          <p className="underline">iris@dream.com</p>
        </div>
        <div className="w-2/5">
          <img
            className="w-[100px] h-[100px] rounded-full"
            src={Julien}
            alt="Julien"
          />
          <h1 className="text-lg md:text-xl">JULIEN</h1>
          <p>
            Si tu cherches un rêve, <br className="hidden md:block" />
            tu trouveras grâce à lui.
          </p>
          <p className="underline">julien@dream.com</p>
        </div>
        <div className="w-2/5">
          <img
            className="w-[100px] h-[100px] rounded-full"
            src={Nassima}
            alt="Nassima"
          />
          <h1 className="text-lg md:text-xl">NASSIMA</h1>
          <p>Le back est dans ses données.</p>
          <p className="underline">nassima@dream.com</p>
        </div>
      </div>
    </div>
  );
}

export default Staff;
