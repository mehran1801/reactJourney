import { React, useState } from "react";

export const SandBox = () => {
  const [newTask, setNewTask] = useState({});
  const [allTasks, setAllTasks] = useState([]);

  const handleChange = ({ target }) => {
    const { name, value } = target;

    setNewTask((prev) => {
      return {
        ...prev,
        [name]: value,
      };
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (!newTask.title) return;
    setAllTasks((prev) => [newTask, ...prev]);
    setNewTask({});
  };

  const handleDelete = (taskId) => {
    return setAllTasks((prev) => prev.filter((task) => task.id !== taskId));
  };

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
          <li key={id} onClick={handleDelete}>
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
};
