import React, { useState } from "react";
import Todo from "./Todo";

import { AnimatePresence, motion } from "framer-motion";
const TodoContainer = ({
  todos,
  onClickDelete,
  onCheckboxChange,
  enterEditMode,
  editableValue,
  setEditableValue,
  saveUpdatedTodo,
}) => {
  return (
    <ul
      className=" transition-all flex flex-col w-full justify-center items-center my-2 py-2 px-2"
    >
      <AnimatePresence>
        {todos.map((todo) =>
          todo.editable ? (
            <form
              key={todo.id}
              id={todo.id}
              animate={{ y: [-20, 0], opacity: [0, 1] }}
              className={`flex justify-center max-h-max items-center w-full rounded-md my-1 drop-shadow-md ${todo.bgColor}`}
            >
              <input
                onChange={setEditableValue}
                value={editableValue}
                className="w-4/6 h-10 focus:drop-shadow-md  bg-white dark:bg-gray-900 dark:border-0 placeholder:dark:text-gray-50 dark:border-gray-900 dark:text-gray-50 border-0 outline-0 text-lg px-2 py-2 my-2 mx-2"
                type="text"
                autoFocus="on"
                placeholder="Edit Me"
              />
              <button
                onClick={saveUpdatedTodo}
                className="w-1/6 text-2xl bg-green-500 text-white dark:bg-green-800  rounded-full"
              >
                <i className="fa-solid fa-check"></i>
              </button>
            </form>
          ) : (
            <Todo
              enterEditMode={enterEditMode}
              completed={todo.completed}
              onCheckboxChange={onCheckboxChange}
              bgColor={todo.bgColor}
              onClickDelete={onClickDelete}
              key={todo.id}
              id={todo.id}
              content={todo.content}
            />
          )
        )}
      </AnimatePresence>
    </ul>
  );
};

export default TodoContainer;
