import React, { useState } from "react";

const produce = [
  "Carrots",
  "Cucumbers",
  "Bell peppers",
  "Avocados",
  "Spinach",
  "Kale",
  "Tomatoes",
  "Bananas",
  "Lemons",
  "Ginger",
  "Onions",
  "Potatoes",
  "Sweet potatoes",
  "Purple cabbage",
  "Broccoli",
  "Mushrooms",
  "Cilantro",
];

const pantryItems = [
  "Chia",
  "Goji berries",
  "Peanut butter",
  "Bread",
  "Cashews",
  "Pumpkin seeds",
  "Peanuts",
  "Olive oil",
  "Sesame oil",
  "Tamari",
  "Pinto beans",
  "Black beans",
  "Coffee",
  "Rice",
  "Dates",
  "Quinoa",
];

export const SandBox = () => {
  const [cart, setCart] = useState([]);
  const selectedBtn = ({target}) => {
    const val = target.value;
    setCart(prev => {
      return[val, ...prev ] ;
    })
    
}
  return (
    <div>
      <h1>SandBox</h1>
      <ul>
        {cart.map(item => <li key={item}></li>)}
      </ul>
      <h2>Produce</h2>
      {produce.map((item,index) => (
        <button value={item} onClick={selectedBtn} key={index}>
          {item}
        </button>
       
      ))}
      ;<h2>Pantry Items</h2>
      {pantryItems.map((item,index) => (
        <button value={item} onClick={selectedBtn} key={index}>
          {item}
        </button>
      ))}
    </div>
  );
}