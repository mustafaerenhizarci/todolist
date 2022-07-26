import React from "react";
import { motion } from "framer-motion";

const Todo = ({
  content,
  onClickDelete,
  id,
  bgColor,
  onCheckboxChange,
  completed,
  enterEditMode,
}) => {
  return (
    <motion.li
      id={id}
      exit={{
        margin: 0,
        padding: 0,
        height: 0,
        opacity: 0,
        scale: [1, 0],
      }}
      animate={{ opacity: [0, 1] }}
      className={`flex justify-center max-h-max items-center w-full rounded-md my-1 drop-shadow-md ${bgColor}`}
    >
      <motion.input
        exit={{ height: 0 }}
        onChange={onCheckboxChange}
        className="scale-150 px-3 my-2 mr-3 w-1/6 dark:bg-gray-300"
        type="checkbox"
      />
      <motion.p
        initial={{ color: "" }}
        exit={{color:"transparent"}}
        style={
          completed
            ? { textDecoration: "line-through" }
            : { textDecoration: "none" }
        }
        className="font-edu font-light text-xl text-black dark:text-white w-3/6 my-2 block pr-2 whitespace-normal max-w-screen-md"
      >
        {content}
      </motion.p>
      <motion.button
        initial={{ color: "" }}
        exit={{ height: 0, color: "transparent" }}
        onClick={enterEditMode}
        className="text-blue-700 w-1/6 text-lg rounded-full bg-white dark:bg-gray-300 mx-1"
      >
        <i className="fa-solid fa-pen"></i>
      </motion.button>
      <motion.button
        initial={{ color: "" }}
        exit={{ height: 0, color: "transparent" }}
        onClick={onClickDelete}
        className="text-red-600 text-lg w-1/6 rounded-full bg-white dark:bg-gray-300 mx-1"
      >
        <i className="fa-solid fa-circle-xmark"></i>
      </motion.button>
    </motion.li>
  );
};

export default Todo;
