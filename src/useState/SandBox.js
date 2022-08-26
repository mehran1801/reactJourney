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
  const [state, setState] = useState();
  return (
    <div>
      <h3>SandBox</h3>
      <ul>
       
      </ul>
    {
      produce.map((item,index) => (
        <button
          value={item}
          key={index}
          onClick={() =>{}}
        >
          {item}
        </button>
    ))}
      </div>
      )
}
 