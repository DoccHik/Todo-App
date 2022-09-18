import React, { useState } from "react";
import CreateTodoField from "./components/CreateTodoField/CreateTodoField";
import TodoItem from "./components/TodoItem/TodoItem";
// import { Transition } from "react-transition-group";
import "../Home/Home.css";

const data = [
  {
    id: 1,
    title: "Finish the essay collaboration",
    isCompleted: false,
  },
  {
    id: 2,
    title: "Read next chapter of the book",
    isCompleted: false,
  },
  {
    id: 3,
    title: "Send the finished assignment",
    isCompleted: false,
  },
];

const Home = () => {
  const [todos, setTodos] = useState(data);

  const changeTodo = (id) => {
    const copyArr = [...todos];
    const currentTodo = copyArr.find((t) => t.id === id);
    currentTodo.isCompleted = !currentTodo.isCompleted;
    setTodos(copyArr);
  };
  const removeTodo = (id) => {
    const copyArr = [...todos].filter((t) => t.id !== id);
    setTodos(copyArr);
  };

  return (
    <>
      <div className=" w-4/5 mx-auto">
        <h1 className="text-2xl font-bold text-center mb-8">Todo app</h1>
        {/* <Transition></Transition> */}
        {todos.length > 0 ? (
          todos.map((todo) => (
            <TodoItem
              key={`_todo_${todo.id}`}
              todo={todo}
              changeTodo={changeTodo}
              removeTodo={removeTodo}
            />
          ))
        ) : (
          <h1 className="text-pink-500 text-xl">Add a new task</h1>
        )}
        <CreateTodoField setTodos={setTodos} />
      </div>
    </>
  );
};

export default Home;
