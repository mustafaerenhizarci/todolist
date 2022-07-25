import React from "react";
import { motion } from "framer-motion";

const TodoHeader = () => {
  return (
    <div>
      <h1 className="border-b-2 border-t-2 py-3 border-gray-500 flex text-5xl text-slate-700 font-light my-5 mx-2 dark:text-gray-300">
        T
        <motion.div transition={{duration:2,delay:1}} animate={{ x: [0,200, 0] }} className="font-bold text-slate-500 dark:text-gray-50">
          O
        </motion.div>
        D<motion.div transition={{duration:2,delay:1}} animate={{ x: [0,-100, 0] }} className="font-bold text-slate-500 dark:text-gray-50">O</motion.div>LIST
      </h1>
    </div>
  );
};

export default TodoHeader;
