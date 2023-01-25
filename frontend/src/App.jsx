import React, { useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Apropos from "./pages/A-Propos";
import Catalogue from "./pages/Catalogue";
import Panier from "./pages/Panier";
import Experience from "./pages/Experience";
import CreateStarGroup from "./components/CreateStarGroup";
import backimg1 from "./assets/backimg1.svg";
import backimg2 from "./assets/backimg2.svg";

function App() {
  const [addToCart, setAddToCart] = useState([]);

  return (
    <main className="flex flex-col z-50">
      <BrowserRouter>
        <Navbar />
        <img
          src={backimg1}
          alt="backimg"
          className=" fixed w-3/5 md:w-1/3 z-0 top-0 left-0"
        />
        <img
          src={backimg2}
          alt="backimg"
          className="fixed w-3/5 md:w-1/3 z-0 right-0 bottom-40"
        />
        <div className="z-0">
          <CreateStarGroup amount={50} />
          <CreateStarGroup amount={50} />
        </div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Apropos" element={<Apropos />} />

          <Route
            path="/Catalogue"
            element={
              <Catalogue setAddToCart={setAddToCart} addToCart={addToCart} />
            }
          />
          <Route
            path="/Panier"
            element={
              <Panier addToCart={addToCart} setAddToCart={setAddToCart} />
            }
          />
          <Route path="/Experience" element={<Experience />} />
        </Routes>
      </BrowserRouter>
    </main>
  );
}

export default App;
