function Confirmation() {
  return (
    <div className="flex flex-col items-center text-white justify-evenly h-screen">
      <h1 className="flex font-sans text-4xl md:text-8xl w-[60%] text-center">
        Merci pour votre commande
      </h1>
      <p className="flex font-cinzel text-1xl w-[60%] md:text-2xl ">
        Votre rêve n° 45501542 est en cours de préparation, vous recevrez
        bientôt un mail de confirmation contenant les détails de votre commande.
      </p>
      <button
        type="button"
        className="flex hover:border-2 hover:border-yellow hover:bg-transparent bg-yellow border-2 border-yellow z-10 px-8 py-4 rounded-full font-sans md:text-1xl text-xl text-white font-thin"
      >
        Retour à l'accueil
      </button>
    </div>
  );
}

export default Confirmation;
