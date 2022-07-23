import React, { useState } from "react";

// Importing Components
import DarkMode from "./DarkMode";
import TodoForm from "./TodoForm";
import TodoHeader from "./TodoHeader";
import TodoContainer from "./TodoContainer";

const App = () => {

  const bgColors = [
    "bg-red-200 dark:bg-red-600",
    "bg-amber-200 dark:bg-amber-600",
    "bg-emerald-200 dark:bg-emerald-600",
    "bg-orange-200 dark:bg-orange-600",
    "bg-blue-200 dark:bg-blue-600",
    "bg-cyan-200 dark:bg-cyan-600",
  ];

  const randomNumber = Math.floor(Math.random() * bgColors.length);

  // States
  const [todos, setTodos] = useState([]);
  const [inputValue, setInputValue] = useState("");

  // Functions

  function addTodo(e) {
    e.preventDefault();
    setTodos((prev) => {
      return [
        ...prev,
        {
          id: prev[0] !== undefined ? prev[prev.length - 1].id + 1 : 1,
          content: inputValue,
          completed:false,
          bgColor: bgColors[randomNumber]
        },
      ];
    });
    setInputValue("");
  }

  function deleteTodo(e) {
    const todoID = Number(e.currentTarget.parentElement.id);
    setTodos((prev) => {
      return prev.filter((item) => item.id !== todoID);
    });
  }

  function updateTodoCheck(e) {
    const todoID = Number(e.currentTarget.parentElement.id);
    
    setTodos(prev => {
      return prev.map((el) => {
        if (el.id === todoID) {
          el.completed = !el.completed
          return el
        } else {
          return el
        }
      })
      
    })

   
  }

  //-------------------------------------------------------------------------------------------//
  return (
    <div className="flex flex-col justify-center items-center">
      <DarkMode />
      <TodoHeader />
      <TodoForm
        onInputChange={(e) => setInputValue(e.target.value)}
        inputValue={inputValue}
        onClickButton={addTodo}
      />
      <TodoContainer onCheckboxChange={updateTodoCheck} onClickDelete={deleteTodo} todos={todos} />
    </div>
  );
};

export default App;
