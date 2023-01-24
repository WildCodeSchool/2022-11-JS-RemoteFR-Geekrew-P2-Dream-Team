import React, { useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Apropos from "./pages/A-Propos";
import Catalogue from "./pages/Catalogue";
import Panier from "./pages/Panier";
import Experience from "./pages/Experience";

function App() {
  const [addToCart, setAddToCart] = useState([]);

  return (
    <BrowserRouter>
      <Navbar addToCart={addToCart} />
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
          element={<Panier addToCart={addToCart} setAddToCart={setAddToCart} />}
        />
        <Route
          path="/Experience"
          element={
            <Experience addToCart={addToCart} setAddToCart={setAddToCart} />
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
