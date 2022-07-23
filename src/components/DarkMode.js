import React, { useState } from "react";
import { motion } from "framer-motion";

const mode = {
  light:
    "transition flex justify-start items-center w-11 h-6 rounded-full bg-gray-300 cursor-pointer",
  dark: "transition flex justify-start items-center w-11 h-6 rounded-full bg-orange-400 cursor-pointer",
};

const DarkMode = () => {
  const [darkMode, setDarkModeState] = useState(mode.light);

  function handleDarkMode() {
    setDarkModeState((prev) => {
      if (prev === mode.light) {
        document.querySelector("html").classList.add("dark");
        return mode.dark;
      } else {
        document.querySelector("html").classList.remove("dark");
        return mode.light;
      }
    });
  }

  return (
    <div className="relative flex flex-col justify-between items-center mt-10 mb-5">
      <h1 className="font-montserrat font-light text-xl mb-2 dark:text-white">{darkMode === mode.light ? "Light":"Dark"} Mode</h1>
      <div onClick={handleDarkMode} className={darkMode}>
        <motion.div
          animate={darkMode === mode.light ? { x: 0 } : { x: "100%" }}
          className="rounded-full w-6 h-6 bg-white drop-shadow-md"
        ></motion.div>
      </div>
    </div>
  );
};

export default DarkMode;
