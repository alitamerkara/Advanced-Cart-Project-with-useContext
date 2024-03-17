import React, { useContext } from "react";
import { MainContext } from "../context/Context";

const Basket = () => {
  const {
    updatedProducts,
    decreaseBasket,
    increaseBasket,
    deleteItem,
    totalPrice,
    removeBasket,
  } = useContext(MainContext);
  return (
    <div>
      {updatedProducts?.map((product, index) => {
        if (product.piece > 0) {
          return (
            <div
              key={index}
              className="mt-4 bg-white shadow-md rounded-lg p-6 flex justify-between items-center mx-auto max-w-lg relative text-center"
            >
              <img
                src={product.url}
                alt={product.name}
                className="w-32 h-32 rounded-lg mr-6"
              />
              <div className="flex-grow">
                <p className="text-xl mb-2 font-semibold">{product.name}</p>
                <p className="text-gray-600 text-lg ">
                  <button
                    className="bg-red-500 text-white font-bold py-2 px-4 rounded ml-4 mr-3"
                    onClick={decreaseBasket}
                    value={product.name}
                  >
                    -
                  </button>
                  <span>
                    {product.piece == 1
                      ? product.piece + " piece"
                      : product.piece + " pieces"}
                  </span>
                  <button
                    className="bg-red-500 text-white font-bold py-2 px-4 rounded ml-4"
                    onClick={increaseBasket}
                    value={product.name}
                  >
                    +
                  </button>
                </p>
              </div>
              <button
                className="text-red-500 text-2xl absolute top-0 right-0 mr-6"
                value={product.name}
                onClick={deleteItem}
              >
                &times;
              </button>
              <p className="text-xl font-semibold">
                ${product.updatedPrice ? product.updatedPrice : product.price}
              </p>
            </div>
          );
        }
      })}
      <div className="bg-gray-100 p-4 text-center mt-5">
        <button
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mb-3"
          onClick={removeBasket}
        >
          Empty the Basket
        </button>
        <p className="text-xl font-semibold">Total Price: ${totalPrice} </p>
      </div>
    </div>
  );
};

export default Basket;
