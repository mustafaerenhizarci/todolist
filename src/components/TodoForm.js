import React from "react";

const TodoForm = ({
  onClickButton,
  inputValue,
  onInputChange,
  onClickEdit,
}) => {
  return (
    <div>
      <form className="w-full flex justify-between items-center py-5 px-3 rounded-lg ">
        <input
          required
          id="todo-input"
          onChange={onInputChange}
          value={inputValue}
          autoFocus="on"
          className="w-4/5 h-10 focus:drop-shadow-md  bg-white dark:bg-gray-900 dark:border-0 placeholder:dark:text-gray-50 dark:border-gray-900 dark:text-gray-50 border-2 border-gray-300 outline-0 text-lg px-2 py-2 rounded-lg mx-2"
          placeholder="Give me some task..."
          type="text"
        />
        <button
          onClick={onClickButton}
          className="w-1/5 mx-2 bg-green-300 rounded-md text-white text-4xl hover:bg-slate-800 hover:text-white transition duration-100"
        >
          +
        </button>
      </form>
    </div>
  );
};

export default TodoForm;
