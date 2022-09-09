
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


     
// const text= `Focused, hard work is the real key
//         to success. Keep your eyes on the goal, 
//         and just keep taking the next step 
//         towards completing it.`
// const maxLength = 15;

export function Sandbox() {
  const [state, setState] = useState([]);
  const [state2, setState2] = useState('');
  const addItem = ({target}) => {
    const capturedVal = target.value;
    // setState2(capturedVal)
    setState(prev => {
      return [capturedVal, ...prev]
    })
  }

  // const handleSubmit = e=> {
  //   e.preventDefault();

  // }

  return (
    <div>
      <form
        // onSubmit={handleSubmit}
      >
        <input onChange={addItem} value={state2} />
      </form>
      <ul>
        {state.map(item => (
          <li
          key={item}
          >{item}</li>
        ))}
      </ul>
    </div>
  );
  
  }


