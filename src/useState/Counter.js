import React, { useState } from "react";
// Quiz Data
 const questions = [
  {
    id: 123,
    prompt: "What two things can you never eat for breakfast?",
    answer: "Lunch and dinner"
  },
  {
    id: 124,
    prompt: "What word is spelled incorrectly in every single dictionary?",
    answer: "Incorrectly"
  },
  {
    id: 125,
    prompt:
      "What do you answer every day, even though it never asks you a question?",
    answer: "Your phone"
  },
  {
    id: 126,
    prompt:
      "What starts with “e” and ends with “e” but only has one letter in it?",
    answer: "An envelope."
  },
  {
    id: 127,
    prompt: "What has a face and two hands, but no arms or legs?",
    answer: "A clock"
  }
];

// Shout out to [Thought Catalog](https://thoughtcatalog.com/january-nelson/2018/03/65-riddles-for-kids-guaranteed-to-stump-you-too/) for these important questions :)


export function Counter() {
  const [counter, setCounter] = useState(0);
  const [questionIndex, setQuestionIndex] = useState(0);
  const incrementCounter = () => {
    return setCounter((prev) => prev + 1);
  };
  // Go Back
  const goBack = () => {
    setQuestionIndex((prev) => prev - 1);
  };
  // Go Forward
  const goForward = () => {
    setQuestionIndex((prev) => prev + 1);
  };
  // Determine first Question
  const onFirstQuestion = questionIndex === 0;
  const onLastQuestion = questionIndex === questions.length - 1;
  // console.log("first " + onFirstQuestion);
  // console.log("last " + onLastQuestion);

  return (
    <div>
      <p>You have clicked that button {counter} times</p>
      <button onClick={incrementCounter}>Click Here</button>
      <hr
        style={{ height: "5px", border: "none", backgroundColor: "black" }}
      ></hr>
      {/* QuizNavbar */}
      <p>Question # {questionIndex + 1}</p>
      <button
        onClick={goBack}
        disabled={onFirstQuestion}
        style={{ padding: "10px", margin: "3px" }}
      >
        Go Back
      </button>
      <button
        onClick={goForward}
        disabled={onLastQuestion}
        style={{ padding: "10px", margin: "3px" }}
      >
        Next
      </button>
    </div>
  );
}

