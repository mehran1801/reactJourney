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
  const [newTask, setNewTask] = useState({});
  const [allTasks, setAllTasks] = useState([]);

  const handleChange = ({target}) => {
      const { name, value } = target;
    
    setNewTask((prev) => {
      return {
        ...prev,
        [name]: value,
      };
    });
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    if (!newTask.title) return;
    setAllTasks((prev) => [newTask, ...prev]);
    setNewTask({});

  };


  const handleDelete = (taskId => {
    return setAllTasks(prev => prev.filter((task) => task.id !== taskId));
  })

  return (
    <>
      <form onSubmit={handleSubmit}>
        <h6>SandBox</h6>
        <input
          name="title"
          value={newTask.title || ""}
          placeholder="New Task"
          onChange={handleChange}
        />
        {!newTask.title ? null : (
          <>
            <textarea
              name="description"
              placeholder="details"
              value={newTask.description || ""}
              onChange={handleChange}
            />
            <button type="submit">Add Task</button>
          </>
        )}
      </form>

      <ul>
        {allTasks.map(({ title, description, id }) => (
          <li
            key={id}
            onClick={handleDelete}
          
          >
            <div>
              <h4>{title}</h4>
              {/* <p>{description}</p> */}
            </div>
          </li>
        ))}
     
      </ul>

      {/* {console.log(allTasks)} */}
    </>
  );

}
 