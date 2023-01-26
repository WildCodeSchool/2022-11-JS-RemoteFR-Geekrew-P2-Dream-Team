import React from "react";

function Staff() {
  return (
    <div className="font-sans text-white text-left md:my-10 md:mx-20 flex flex-col">
      <img
        className="animate-move  w-[100px] my-1 rounded-full "
        src="./src/assets/images-staff/antoine.png"
        alt=""
      />

      <h1 className="m-6 text-lg md:text-xl">Antoine </h1>
      <p>Le listeur de rêves</p>
      <p> antoine@dream.com</p>

      <img
        className="animate-move w-[100px] h-[100px] my-1 rounded-full"
        src="./src/assets/images-staff/cassandra.png"
        alt=""
      />
      <h1 className="m-6 text-lg md:text-xl">Cassandra</h1>
      <p>Vous emmène dans les nuages ou les étoiles</p>
      <p>cassandra@dream.com</p>
      <img
        className="animate-move w-[100px] h-[100px] my-1 rounded-full"
        src="./src/assets/images-staff/iris.png"
        alt=""
      />
      <p className="m-6 text-lg md:text-xl">
        Iris
        <br />
        Passe à la caisse avec elle
        <br /> iris@dream.com
      </p>
      <img
        className="animate-move w-[100px] h-[100px] my-1 rounded-full"
        src="./src/assets/images-staff/julien.png"
        alt=""
      />
      <p className="m-6 text-lg md:text-xl">
        Julien <br /> Si tu cherches un rêve tu trouvera grâce à lui
        <br />
        julien@dream.com
      </p>
      <img
        className="animate-move w-[100px] h-[100px] my-1 rounded-full"
        src="./src/assets/images-staff/nassima.png"
        alt=""
      />
      <p className="m-6 text-lg md:text-xl">
        Nassima <br /> Le back est dans ses données
        <br />
        nassima@dream.com
      </p>
    </div>
  );
}

export default Staff;
