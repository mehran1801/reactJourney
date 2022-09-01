import { React, useState } from 'react';
// Codecademy Version

function NewTask({ newTask, handleChange, handleSubmit }) {
    return (
      <form onSubmit={handleSubmit}>
        <input
          name="title"
          type="text"
          placeholder="New Task"
          value={newTask.title || ""}
          onChange={handleChange}
        />

        {/* if the input field is not empty, then an optional description textarea as well as the submit button (with a value of “Add Task”) also become visible. */}

        {!newTask.title ? null : (
          <>
            <textarea
              name="description"
              placeholder="Details"
              value={newTask.description || ""}
              onChange={handleChange}
            />
            <button type="submit"> Add Task </button>
          </>
        )}
      </form>
    );
}



function TasksList({ allTasks, handleDelete }) {
    return (
      <ul>
        {allTasks.map(({ title, description, id }) => (
          <li key={id}>
            <div>
              <h2>{title}</h2>
            </div>
          </li>
        ))}
      </ul>
    );
}





export const TodoList = () => {
    const [newTask, setNewTask] = useState({});
    const handleChange = ({ target }) => {
      const { name, value } = target;
      setNewTask((prev) => ({ ...prev, id: Date.now(), [name]: value }));
    };

    const [allTasks, setAllTasks] = useState([]);
    const handleSubmit = (event) => {
      event.preventDefault();

      // we should exit our function immediately because we don’t want to add tasks with no titles to our tasklist.

      if (!newTask.title) return;

      //  If indeed something is present in the input field and the submit button has been clicked, then we want to add this to our tasks list.

      setAllTasks((prev) => [newTask, ...prev]);

      //  Once we have added a task to our list, we need to reset the newTask object. We do so with this statement. Suppose we didn’t do this reset. What would happen? When we click the submit button, our task will be added to the list as intended. That’s great! But whatever we typed in the input field and the description textarea will still remain visible on the screen. So, when we want to add a new task, we will have to edit/delete the values visible in the fields. It is much more desirable that once we have added a task, the input field is completely blank. So, we reset our newTask object to an empty object {}

      setNewTask({});
    };
    const handleDelete = (taskIdToRemove) => {
      setAllTasks((prev) => prev.filter((task) => task.id !== taskIdToRemove));
    };

    return (
      <main>
        <h1>Tasks</h1>
        <NewTask
          newTask={newTask}
          handleChange={handleChange}
          handleSubmit={handleSubmit}
        />
        <TasksList allTasks={allTasks} handleDelete={handleDelete} />
      </main>
    );
}


