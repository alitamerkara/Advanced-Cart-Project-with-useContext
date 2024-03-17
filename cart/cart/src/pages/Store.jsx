import React, { useContext } from "react";
import { MainContext } from "../context/Context";
import ChoosingPiece from "./ChoosingPiece";

const Store = () => {
  const { addToBasket, actualProducts } = useContext(MainContext);

  return (
    <div className="flex flex-wrap justify-center">
      {actualProducts.map((product, index) => {
        return (
          <div
            key={index}
            className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/5 p-2"
          >
            <div className="max-w-xs rounded overflow-hidden shadow-lg text-center">
              <img src={product.url} alt={product.name} className="w-full" />
              <div className="px-6 py-4">
                <div className="font-bold text-xl mb-2">{product.name}</div>
                <p className="text-gray-700 text-base mb-2 text-xl">
                  ${product.price}
                </p>
                {product.piece == 0 ? (
                  <button
                    className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                    onClick={addToBasket}
                    value={product.name}
                  >
                    Add to Cart
                  </button>
                ) : (
                  <ChoosingPiece piece={product.piece} name={product.name} />
                )}
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Store;
