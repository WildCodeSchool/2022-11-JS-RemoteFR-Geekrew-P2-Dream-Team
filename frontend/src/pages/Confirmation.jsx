import { Link } from "react-router-dom";

function Confirmation() {
  return (
    <div className="flex flex-col items-center text-white justify-evenly h-screen">
      <h1 className="flex font-sans text-4xl md:text-8xl w-[60%] text-center">
        Merci pour votre commande
      </h1>
      <p className="flex font-cinzel text-1xl w-[60%] md:text-2xl ">
        Votre rêve n° {Math.floor(Math.random() * 50000)} est en cours de
        préparation, un mail de confirmation contenant les détails de votre
        commande vous sera envoyé.
        <br />
        <br />
        Vous recevrez également une puce électronique sous forme de comprimé à
        avaler pour activer votre rêve. Aucun risque pour votre santé, notre
        dispositif est testé en laboratoire et sera éliminé naturellement de
        votre organisme sous 15 jours.
      </p>
      <Link to="/">
        <button
          type="button"
          className="flex hover:border-2 hover:border-yellow hover:bg-transparent bg-yellow border-2 border-yellow z-10 px-8 py-4 rounded-full font-sans md:text-1xl text-xl text-white font-thin"
        >
          Retour à l'accueil
        </button>
      </Link>
    </div>
  );
}

export default Confirmation;
