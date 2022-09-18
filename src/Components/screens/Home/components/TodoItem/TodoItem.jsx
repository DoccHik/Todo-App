import React from "react";
import Check from "./Check";
import { IoMdCloseCircleOutline } from "react-icons/io";

const TodoItem = ({ todo, changeTodo, removeTodo }) => {
  return (
    <div className="flex items-center justify-between mb-3 rounded-2xl bg-gray-800 p-5 w-full">
      <button className="flex items-center" onClick={() => changeTodo(todo.id)}>
        <Check isCompleted={todo.isCompleted} />
        <span className={todo.isCompleted ? "line-through" : null}>
          {todo.title}
        </span>
      </button>
      <button onClick={() => removeTodo(todo.id)}>
        <IoMdCloseCircleOutline
          size={24}
          className="text-gray-700 hover:text-red-500 transition-colors ease-in-out duration-300"
        />
      </button>
    </div>
  );
};

export default TodoItem;
