import React from "react";
import { NavLink } from "react-router-dom";

const Home = () => {
  return (
    <div
      className="bg-cover bg-center h-screen flex flex-col justify-center items-center bg-opacity-75"
      style={{
        backgroundImage:
          "url('https://w0.peakpx.com/wallpaper/14/227/HD-wallpaper-perks-of-using-online-supermarket-shopping-all-perfect-stories-grocery-store.jpg')",
      }}
    >
      <div className="text-center">
        <h1 className="text-4xl text-white mb-4">Welcome to Altaka Store</h1>
        <NavLink to="/store">
          <button className="mt-4 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
            Go to Shopping
          </button>
        </NavLink>
      </div>
    </div>
  );
};

export default Home;
