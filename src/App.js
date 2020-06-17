import React from "react";
import "./App.css";
import Cart from "./Cart";

const items = [
  { id: 1, name: "Taco Seasoning", price: "2.5", qty: 2 },
  { id: 2, name: "Pinto Beans", price: "3.5", qty: 3 },
  { id: 3, name: "Sour Cream", price: "2.2", qty: 1},
];

function App() {

// console.log(items)

  return (
    <div className="App">
      <Cart initialItems ={items}/>
    </div>
  );
}

export default App;
