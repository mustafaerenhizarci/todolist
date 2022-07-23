import React from "react";

// Importing Components
import DarkMode from "./DarkMode";
import TodoForm from "./TodoForm";
import TodoHeader from "./TodoHeader";
import TodoContainer from "./TodoContainer";

const App = () => {
  return (
    <div className="flex flex-col justify-center items-center">
      <DarkMode />
      <TodoHeader />
      <TodoForm />
      <TodoContainer />
    </div>
  );
};

export default App;
