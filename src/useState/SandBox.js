import { click } from "@testing-library/user-event/dist/click";
import React, { useState } from "react";

const options = ["Bell Pepper", "Sausage", "Pepperoni", "Pineapple"];

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


const colors = [
  "Aquamarine",
  "BlueViolet",
  "Chartreuse",
  "CornflowerBlue",
  "Thistle",
  "SpringGreen",
  "SaddleBrown",
  "PapayaWhip",
  "MistyRose",
];


const questions = [
  {
    id: 123,
    prompt: "What two things can you never eat for breakfast?",
    answer: "Lunch and dinner",
  },
  {
    id: 124,
    prompt: "What word is spelled incorrectly in every single dictionary?",
    answer: "Incorrectly",
  },
  {
    id: 125,
    prompt:
      "What do you answer every day, even though it never asks you a question?",
    answer: "Your phone",
  },
  {
    id: 126,
    prompt:
      "What starts with “e” and ends with “e” but only has one letter in it?",
    answer: "An envelope.",
  },
  {
    id: 127,
    prompt: "What has a face and two hands, but no arms or legs?",
    answer: "A clock",
  },
];



export const SandBox = () => {
  const [state, setState] = useState([]);
  const handleClick = ({target}) => {
    const clicked = target.value;
    setState(prev => {
      return [...prev, clicked]
    })
  }
  const handleDelete = ((targetInd) => {
    return setState((prev) => {
      return prev.filter((item, indx) => {
       
          return indx !== targetInd;
        
    })
  })
})
  return (
    <div>
      <h3>Grocery Cart</h3>
      <ul>
        {state.map((item,i) => (
          <li
            key={i}
            value={item}
            onClick={()=>{handleDelete(i)}}
          >{item}</li>
        ))}
      </ul>
      {produce.map((item,i) => (
        <button
          value={item}
          key={i}
          onClick={handleClick}
        >
          {item}
        </button>
      ))}
    </div>
  )
  
  }
