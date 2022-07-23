import React from "react";
import Todo from "./Todo";

const TodoContainer = () => {
  return (
    <ul className="w-full flex flex-col justify-center items-center my-2 py-2 px-2  border-2 border-gray-300">
      <Todo />
    </ul>
  );
};

export default TodoContainer;
