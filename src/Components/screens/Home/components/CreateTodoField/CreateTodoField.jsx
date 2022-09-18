import React, { useState } from "react";

import { MdOutlineAddTask } from "react-icons/md";

const CreateTodoField = ({ setTodos }) => {
  const [title, setTitle] = useState("");

  const addTodo = (title) => {
    console.log(title);
    setTodos((prev) => [
      {
        id: new Date(),
        title,
        isCompleted: false,
      },
      ...prev,
    ]);
    setTitle("");
  };
  return (
    <>
      <div className="flex items-center justify-between mb-3 rounded-2xl border-gray-800 border-2 px-5 py-2 w-full mt-20">
        <MdOutlineAddTask size={24} className="text-pink-500" />
        <input
          type="text"
          onChange={(e) => setTitle(e.target.value)}
          value={title}
          onKeyPress={(e) => e.key === "Enter" && addTodo(title)}
          className="bg-transparent w-full border-none outline-none ml-3"
          placeholder="Enter todo"
        />
      </div>
    </>
  );
};

export default CreateTodoField;
