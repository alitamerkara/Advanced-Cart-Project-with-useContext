import React, { useContext } from "react";
import { MainContext } from "../context/Context";

const ChoosingPiece = ({ piece, name }) => {
  const { decreaseProduct, increaseProduct } = useContext(MainContext);
  return (
    <div className="flex items-center justify-center">
      <button
        onClick={decreaseProduct}
        className="bg-red-500 text-white font-bold py-2 px-4 rounded mr-4"
        value={name}
      >
        -
      </button>
      <span>{piece}</span>
      <button
        onClick={increaseProduct}
        className="bg-red-500 text-white font-bold py-2 px-4 rounded ml-4"
        value={name}
      >
        +
      </button>
    </div>
  );
};

export default ChoosingPiece;
