import React, { useState } from "react";

// Importing Components
import DarkMode from "./DarkMode";
import TodoForm from "./TodoForm";
import TodoHeader from "./TodoHeader";
import TodoContainer from "./TodoContainer";
import { ToastContainer, toast, Slide } from "react-toastify";
import "react-toastify/dist/ReactToastify.min.css";
import { nanoid } from "nanoid";

//
const bgColors = [
  "bg-red-200 dark:bg-red-600",
  "bg-amber-200 dark:bg-amber-600",
  "bg-emerald-200 dark:bg-emerald-600",
  "bg-orange-200 dark:bg-orange-600",
  "bg-blue-200 dark:bg-blue-600",
  "bg-cyan-200 dark:bg-cyan-600",
];


const App = () => {

  const randomNumber = Math.floor(Math.random() * bgColors.length);

  const starterTodos = [
    {
      id: nanoid(),
      content: "Meet with Alexa",
      completed: false,
      bgColor: bgColors[Math.floor(Math.random() * bgColors.length)],
      editable: false,
    },
    {
      id: nanoid(),
      content: "Prepare an essay about elephants",
      completed: false,
      bgColor: bgColors[Math.floor(Math.random() * bgColors.length)],
      editable: false,
    },
    {
      id: nanoid(),
      content: "Don't watch Game of thrones!",
      completed: false,
      bgColor: bgColors[Math.floor(Math.random() * bgColors.length)],
      editable: false,
    },
  ];

  // States
  const [todos, setTodos] = useState(starterTodos);
  const [inputValue, setInputValue] = useState("");
  const [editableValue, setEditableValue] = useState("");

  // Functions

  function addTodo(e) {
    if (inputValue.length > 4) {
      setTodos((prev) => {
        return [
          {
            id: nanoid(),
            content: inputValue,
            completed: false,
            bgColor: bgColors[randomNumber],
            editable: false,
          },
          ...prev,
        ];
      });
    } else {
      toast("Please enter at least 5 character!", {
        position: "top-center",
        autoClose: 500,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
      });
    }

    setInputValue("");
    e.preventDefault();
  }

  function deleteTodo(e) {
    const todoID = e.currentTarget.parentElement.id;
    setTodos((prev) => {
      return prev.filter((item) => item.id !== todoID);
    });
  }

  function updateTodoCheck(e) {
    const todoID = e.currentTarget.parentElement.id;

    setTodos((prev) => {
      return prev.map((el) => {
        if (el.id === todoID) {
          el.completed = !el.completed;
          return el;
        } else {
          return el;
        }
      });
    });
  }

  function enterEditMode(e) {
    const todoID = e.currentTarget.parentElement.id;

    setTodos((prev) => {
      return prev.map((todo) => {
        if (todo.id === todoID) {
          todo.editable = true;
          setEditableValue(todo.content);
          return todo;
        } else {
          return todo;
        }
      });
    });
  }

  function saveUpdatedTodo(e) {
    const todoID = e.currentTarget.parentElement.id;

    setTodos((prev) => {
      return prev.map((todo) => {
        if (todo.id === todoID) {
          todo.content = editableValue;
          todo.editable = false;
          return todo;
        } else {
          return todo;
        }
      });
    });
  }

  //-------------------------------------------------------------------------------------------//
  return (
    <div className="flex flex-col justify-center items-center">
      <ToastContainer
        transition={Slide}
        position="top-center"
        autoClose={500}
        hideProgressBar
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
      <DarkMode />
      <TodoHeader />
      <TodoForm
        onInputChange={(e) => setInputValue(e.target.value)}
        inputValue={inputValue}
        onClickButton={addTodo}
      />
      <TodoContainer
        saveUpdatedTodo={saveUpdatedTodo}
        editableValue={editableValue}
        setEditableValue={(e) => {
          setEditableValue(e.target.value);
        }}
        enterEditMode={enterEditMode}
        onCheckboxChange={updateTodoCheck}
        onClickDelete={deleteTodo}
        todos={todos}
      />
    </div>
  );
};

export default App;
