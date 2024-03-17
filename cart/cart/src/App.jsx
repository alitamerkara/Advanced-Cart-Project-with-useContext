import React from "react";
import { useContext } from "react";
import { MainContext } from "./context/Context";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Store from "./pages/Store";
import Basket from "./pages/Basket";
import Navbar from "./pages/Navbar";
function App() {
  const { products } = useContext(MainContext);
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/store" element={<Store />} />
        <Route path="/basket" element={<Basket />} />
      </Routes>
    </div>
  );
}

export default App;
