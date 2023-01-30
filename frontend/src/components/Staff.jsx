import React from "react";

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
            src="./src/assets/images-staff/antoine.png"
            alt=""
          />
          <h1 className="text-lg md:text-xl">ANTOINE</h1>
          <p>Le listeur de rêves</p>
          <p>antoine@dream.com</p>
        </div>
        <div className="w-2/5">
          <img
            className="w-[100px] h-[100px] rounded-full"
            src="./src/assets/images-staff/cassandra.png"
            alt=""
          />
          <h1 className="text-lg md:text-xl">CASSANDRA</h1>
          <p>Vous emmène dans les nuages ou les étoiles</p>
          <p>cassandra@dream.com</p>
        </div>
        <div className="w-2/5">
          <img
            className="w-[100px] h-[100px] rounded-full"
            src="./src/assets/images-staff/iris.png"
            alt=""
          />
          <h1 className="text-lg md:text-xl">IRIS</h1>
          <p>Passe à la caisse avec elle</p>
          <p>iris@dream.com</p>
        </div>
        <div className="w-2/5">
          <img
            className="w-[100px] h-[100px] rounded-full"
            src="./src/assets/images-staff/julien.png"
            alt=""
          />
          <h1 className="text-lg md:text-xl">JULIEN</h1>
          <p>Si tu cherches un rêve tu trouvera grâce à lui</p>
          <p>julien@dream.com</p>
        </div>
        <div className="w-2/5">
          <img
            className="w-[100px] h-[100px] rounded-full"
            src="./src/assets/images-staff/nassima.png"
            alt=""
          />
          <h1 className="text-lg md:text-xl">NASSIMA</h1>
          <p>Le back est dans ses données</p> <p>nassima@dream.com</p>
        </div>
      </div>
    </div>
  );
}

export default Staff;
