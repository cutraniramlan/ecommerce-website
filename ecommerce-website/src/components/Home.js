import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Productlist from "./Productlist";
import Cart from "./Cart";
import Category from "./Category";
import Productpage from "./Productpage";
import Cartbutton from "./Cartbutton";
import { v4 as uuid } from "uuid";

function Home() {
  const [cartItems, setCartItems] = useState([]);
  const [categ, setCateg] = useState();

  const [productsw, setProductsw] = useState([]);

  const [products, setProducts] = useState([
    {
      title: "Blender",
      price: "15",
      categ: "electronics",
      id: uuid(),
    },
    {
      title: "Apple airpods",
      price: "200",
      categ: "electronics",
      id: uuid(),
    },
    {
      title: "T-shirt",
      price: "20",
      categ: "clothing",
      id: uuid(),
    },
    {
      title: "Shorts",
      price: "10",
      categ: "clothing",
      id: uuid(),
    },
    {
      title: "Book-1",
      price: "10",
      categ: "books",
      id: uuid(),
    },
    {
      title: "Book-2",
      price: "10",
      categ: "books",
      id: uuid(),
    },
    {
      title: "Barbell",
      price: "5",
      categ: "fitness",
      id: uuid(),
    },
    {
      title: "Dumbbell",
      price: "10",
      categ: "fitness",
      id: uuid(),
    },
    {
      title: "Phone-1",
      price: "300",
      categ: "phones",
      id: uuid(),
    },
    {
      title: "Phone-2",
      price: "500",
      categ: "phones",
      id: uuid(),
    },
    {
      title: "Toy truck",
      price: "17",
      categ: "toys",
      id: uuid(),
    },
    {
      title: "Fidget spinner",
      price: "20",
      categ: "toys",
      id: uuid(),
    },
  ]);

  const addToCart = (id) => {
    setCartItems((prevState) => [
      ...prevState,
      products.find((item) => item.id === id),
    ]);
  };

  const removeFromCart = (id) => {
    setTimeout(() => {
      setCartItems(cartItems.filter((item) => item.id !== id));
    }, 0);
  };
  return (
    <div className="home">
      <div className="header">
        <div className="logo">
          easy<span>Buy</span>
        </div>
      </div>
      <Router>
        <Route path="/">
          <Cartbutton />
        </Route>
        <Route exact path="/">
          <Category changeCateg={(categ) => setCateg(categ)} />
        </Route>
        <Route exact path="/products">
          <Productlist list={products} category={categ} />
        </Route>
        <Route exact path="/products/:title">
          <Productpage list={products} addToCart={addToCart} />
        </Route>
        <Route exact path="/cart">
          <Cart cartItems={cartItems} removeItem={removeFromCart} />
        </Route>
      </Router>
    </div>
  );
}

export default Home;
