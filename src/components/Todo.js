import React from "react";

const Todo = () => {
  return (
    <li className="flex justify-center items-center w-full h-20">
      <input className="" type="checkbox" />
      <p className="w-5/6">First Todo Item asdsadasdadasdasdadasdasdasdasdadad</p>
      <button className=" text-yellow-300 bg-red-600">
        <i class="fa-solid fa-pen-to-square"></i>
      </button>
      <button className="">
        <i class="fa-solid fa-trash"></i>
      </button>
    </li>
  );
};

export default Todo;
