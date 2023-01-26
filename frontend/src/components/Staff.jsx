import React from "react";

function Staff() {
  return (
    <div>
      <img
        className="animate-move  w-[100px] my-1 rounded-full "
        src="./src/assets/images-staff/antoine.png"
        alt=""
      />

      <p className="m-6 text-lg md:text-xl">
        Antoine <br />
        Le listeur de rêves
        <br /> antoine@dream.com
      </p>

      <img
        className="animate-move w-[100px] h-[100px] my-1 rounded-full"
        src="./src/assets/images-staff/cassandra.png"
        alt=""
      />
      <p className="m-6 text-lg md:text-xl">
        Cassandra
        <br /> Vous emmène dans les nuages ou les étoiles
        <br />
        cassandra@dream.com
      </p>
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
        Julien <br /> Si tu cherche un rêve tu trouvera grâce à lui
        <br />
        julien@dream.com
      </p>
      <img
        className="animate-move w-[100px] h-[100px] my-1 rounded-full"
        src="./src/assets/images-staff/nassima.png"
        alt=""
      />
      <p className="m-6 text-lg md:text-xl">
        Nassima <br /> Le back est dans ses donées
        <br />
        nassima@dream.com
      </p>
    </div>
  );
}

export default Staff;
