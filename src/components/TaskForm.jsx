/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import { useState, useContext } from "react";
import { TaskContext } from "../context/TaskContext";

function TaskForm() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const { createTask } = useContext(TaskContext);
  const handleSubmit = (e) => {
    e.preventDefault();

    createTask(title, description);
    setTitle("");
    setDescription("");
    // e.target.reset();
  };
  return (
    <div className="max-w-md mx-auto text-white">
      <form className="bg-slate-800 p-10 mb-4 " onSubmit={handleSubmit}>
        <h1 className="text-2xl font-bold mb-3">Create your task</h1>
        <label htmlFor="title" className="">
          Title:{" "}
        </label>
        <input
          className="bg-slate-300 p-3 w-full mb-2"
          id="title"
          type="text"
          placeholder="Type title task..."
          onChange={(e) => setTitle(e.target.value)}
          value={title}
          autoFocus
        />
        <label htmlFor="description" className="text-white">
          Description:{" "}
        </label>
        <textarea
          className="bg-slate-300 p-3 w-full mb-2"
          id="description"
          type="text"
          placeholder="Type task description ..."
          onChange={(e) => setDescription(e.target.value)}
          value={description}
        />
        <button className="bg-indigo-500 px-3 py-1 rounded-md mt-4 hover:bg-indigo-400">
          Guardar
        </button>
      </form>
    </div>
  );
}

export default TaskForm;
