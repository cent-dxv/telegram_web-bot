import "./App.css";
import { useState, useEffect } from "react";

import Card from "./components/card/card";
import Cart from "./components/cart/cart";
import { getData } from "./db/db";
// const food = getData();

  const tele =window.Telegram.Webapp
function App() {
  const [cartItems, setCartItems] = useState([]);
  useEffect(() => {
  tele.ready()
  }, )
  


  const onAdd = (food) => {
    const exist = cartItems.find((x) => x.id === food.id);
    if (exist) {
      setCartItems(
        cartItems.map((x) =>
          x.id === food.id ? { ...exist, quantity: exist.quantity + 1 } : x
        )
      );
    } else {
      setCartItems([...cartItems, { ...food, quantity: 1 }]);
    }
  };


  // const onCheckout = () => {
  //   tele.MainButton.text = "Pay :)";
  //   tele.MainButton.show();
  // };

  const onRemove = (food) => {
    const exist = cartItems.find((x) => x.id === food.id);
    if (exist.quantity === 1) {
      setCartItems(cartItems.filter((x) => x.id !== food.id));
    } else {
      setCartItems(
        cartItems.map((x) =>
          x.id === food.id ? { ...exist, quantity: exist.quantity - 1 } : x
        )
      );
    }
  };

  return (
    <>

        <h1 className="heading">Order Food</h1>
        <Cart cartItems={cartItems} onCheckout="{onCheckout}"/>
        {console.log(getData())}

        <div className="cards__container">
          {getData().map((e) => {
            return <Card food={e} key={e.id} onAdd={onAdd} onRemove={onRemove} />;
          })}
        </div>

  
    </>
  );
}

export default App;
