import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";

const mode = {
  light:
    "transition flex justify-start items-center w-11 h-6 rounded-full bg-gray-300 cursor-pointer",
  dark: "transition flex justify-start items-center w-11 h-6 rounded-full bg-blue-400 cursor-pointer",
};

const DarkMode = () => {
  const [darkMode, setDarkModeState] = useState(mode.light);
  function handleDarkMode() {
    setDarkModeState((prev) => {
      if (prev === mode.light) {
        document.querySelector("html").classList.add("dark");
        document.body.classList.replace("lightbg", "darkbg");
        
        return mode.dark;
      } else {
        document.querySelector("html").classList.remove("dark");
        document.body.classList.replace("darkbg", "lightbg");
        return mode.light;
      }
    });
    localStorage.setItem("darkmodeState", JSON.stringify(darkMode === mode.light));
  }

  useEffect(() => {
    (JSON.parse(localStorage.getItem('darkmodeState'))) ? handleDarkMode() : console.log("didnt change")
    // eslint-disable-next-line react-hooks/exhaustive-deps
  },[]);

  return (
    <div className="relative flex flex-col justify-between items-center mt-5">
      <h1 className="font-montserrat font-light text-xl mb-2 dark:text-white">
        {darkMode === mode.light ? "Light" : "Dark"} Mode
      </h1>
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
