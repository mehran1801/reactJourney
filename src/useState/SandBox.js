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
  const [questionIndex, setQuestionIndex] = useState(0);
  const goForward = () => {
    setQuestionIndex((prev) => prev + 1);
  };
  const goBack = () => {
    setQuestionIndex((prev) => prev - 1);
  };
  const onFirstQuestion = questionIndex === 0;
 
  // {
  //   console.log("first " + firstQuestion);
  // }
  
  const onLastQuestion = questionIndex === questions.length - 1;
  // {console.log('length is '+questions.length)}
  // { console.log('last' + lastQuestion) }
  return (

    <div>
      <p>Question # { questionIndex+1}</p>
      <button
        onClick={goBack}
        disabled={onFirstQuestion}
      >
Back
      </button>
      <button
        onClick={goForward}
        disabled={onLastQuestion}
        
      >
Next
      </button>
    </div>
  )
}
 