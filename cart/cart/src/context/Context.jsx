import React, { createContext, useState } from "react";
import apple from "../assets/apple.jpg";
import pear from "../assets/pear.jpg";
import orange from "../assets/orange.jpg";
import banana from "../assets/banana.jpg";
import grapes from "../assets/grape.jpg";
import strawberry from "../assets//strawberry.webp";
import tomato from "../assets/tomato.webp";
import cucumber from "../assets/cucumber.jpg";
import potato from "../assets/potato.png";
import onion from "../assets/onion.jpg";

export const MainContext = createContext();
const products = [
  { name: "Apple", price: 8, updatedPrice: 8, url: apple, piece: 0 },
  { name: "Pear", price: 10, updatedPrice: 10, url: pear, piece: 0 },
  { name: "Orange", price: 9, updatedPrice: 9, url: orange, piece: 0 },
  { name: "Banana", price: 6, updatedPrice: 6, url: banana, piece: 0 },
  { name: "Grapes", price: 12, updatedPrice: 12, url: grapes, piece: 0 },
  {
    name: "Strawberry",
    price: 15,
    updatedPrice: 15,
    url: strawberry,
    piece: 0,
  },
  { name: "Tomato", price: 8, updatedPrice: 8, url: tomato, piece: 0 },
  { name: "Cucumber", price: 7, updatedPrice: 7, url: cucumber, piece: 0 },
  { name: "Potato", price: 5, updatedPrice: 5, url: potato, piece: 0 },
  { name: "Onion", price: 4, updatedPrice: 4, url: onion, piece: 0 },
];
export const MainProvider = ({ children }) => {
  const [updatedProducts, setUpdatedProducts] = useState([]);
  const [totalPrice, setTotalPrice] = useState(0);
  const actualProducts =
    updatedProducts.length > 0 ? updatedProducts : products;

  const addToBasket = (e) => {
    const productsMap = updatedProducts.length > 0 ? updatedProducts : products;
    const value = productsMap.map((product) => {
      if (e.target.value == product.name) {
        setTotalPrice((totalPrice) => totalPrice + product.price);
        return { ...product, piece: product.piece + 1 };
      } else {
        return product;
      }
    });
    setUpdatedProducts(value);
  };
  const decreaseProduct = (e) => {
    const value = updatedProducts?.map((product) => {
      if (product.name == e.target.value) {
        setTotalPrice((totalPrice) => totalPrice - product.price);
        return {
          ...product,
          piece: product.piece - 1,
          updatedPrice: product.updatedPrice - product.price,
        };
      } else {
        return product;
      }
    });
    setUpdatedProducts(value);
  };
  const increaseProduct = (e) => {
    const value = updatedProducts?.map((product) => {
      if (product.name == e.target.value) {
        setTotalPrice((totalPrice) => totalPrice + product.price);

        return {
          ...product,
          piece: product.piece + 1,
          updatedPrice: product.updatedPrice + product.price,
        };
      } else {
        return product;
      }
    });
    setUpdatedProducts(value);
  };
  const decreaseBasket = (e) => {
    const value = updatedProducts?.map((product) => {
      if (product.name == e.target.value) {
        setTotalPrice((totalPrice) => totalPrice - product.price);
        return {
          ...product,
          piece: product.piece - 1,
          updatedPrice: product.updatedPrice - product.price,
        };
      } else {
        return product;
      }
    });
    setUpdatedProducts(value);
  };
  const increaseBasket = (e) => {
    const value = updatedProducts?.map((product) => {
      if (product.name == e.target.value) {
        setTotalPrice((totalPrice) => totalPrice + product.price);
        return {
          ...product,
          piece: product.piece + 1,
          updatedPrice: product.updatedPrice + product.price,
        };
      } else {
        return product;
      }
    });
    setUpdatedProducts(value);
  };
  const deleteItem = (e) => {
    const value = updatedProducts.map((product) => {
      if (e.currentTarget.value == product.name) {
        setTotalPrice((totalPrice) => totalPrice - product.updatedPrice);
        return { ...product, piece: 0, updatedPrice: product.price };
      } else {
        return product;
      }
    });
    setUpdatedProducts(value);
  };
  const removeBasket = () => {
    const value = updatedProducts.map((product) => {
      if (product.piece != 0) {
        return { ...product, piece: 0, updatedPrice: product.price };
      } else {
        return product;
      }
    });
    setUpdatedProducts(value);
    setTotalPrice(0);
  };
  const datas = {
    products,
    actualProducts,
    updatedProducts,
    totalPrice,
    addToBasket,
    decreaseProduct,
    increaseProduct,
    decreaseBasket,
    increaseBasket,
    deleteItem,
    removeBasket,
  };

  return <MainContext.Provider value={datas}>{children}</MainContext.Provider>;
};
