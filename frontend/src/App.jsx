import React, { useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Apropos from "./pages/A-Propos";
import Catalogue from "./pages/Catalogue";
import Panier from "./pages/Panier";
import Contact from "./pages/Contact";

function App() {
  const [addToCart, setAddToCart] = useState([]);

  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Apropos" element={<Apropos />} />

        <Route
          path="/Catalogue"
          element={
            <Catalogue setAddToCart={setAddToCart} addToCart={addToCart} />
          }
        />

        <Route path="/Panier" element={<Panier />} />
        <Route path="/Contact" element={<Contact />} />
        <Route path="/Revelation" element={<Contact />} />
        <Route path="/Experience" element={<Contact />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
