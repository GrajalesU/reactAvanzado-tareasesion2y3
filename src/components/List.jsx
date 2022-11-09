import React, { useState } from "react";
import useList from "../hooks/useList";

export default function List() {
  const {
    value: tasks,
    push,
    isEmpty,
    remove,
    clear,
    invert,
    sort,
  } = useList();
  const [newTask, setNewTask] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    push(newTask);

    setNewTask("");
  };

  const handleInputChange = (event) => {
    setNewTask(event.target.value);
  };
  return (
    <div
      style={{
        border: "1px solid",
        padding: 10,
        marginBottom: 10,
      }}
    >
      <h1>Todo List</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="New task"
          value={newTask}
          onChange={handleInputChange}
        />
        <button type="button" onClick={clear}>CLEAR</button>
        <button type="button" onClick={invert}>INVERT</button>
        <button  type="button" onClick={sort}>SORT</button>
        <button type="submit">ADD</button>

      </form>
      {isEmpty() ? (
        <p>Add your first task</p>
      ) : (
        <ul>
          {tasks.map((task, idx) => (
            <li key={idx}>
              <span>{task}</span>
              <input
                type="checkbox"
                onClick={() => remove(idx)}
                checked={false}
              />
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
