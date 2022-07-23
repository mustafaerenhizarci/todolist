import React from "react";
import Todo from "./Todo";

const TodoContainer = ({ todos, onClickDelete,onCheckboxChange }) => {
  return (
    <ul className="flex flex-col w-full justify-center items-center my-2 py-2 px-2">
      {todos.map((todo, index) => (
        <Todo
          completed={todo.completed}
          onCheckboxChange={onCheckboxChange}
          bgColor={todo.bgColor}
          onClickDelete={onClickDelete}
          key={index}
          id={todo.id}
          content={todo.content}
        />
      ))}
    </ul>
  );
};

export default TodoContainer;
