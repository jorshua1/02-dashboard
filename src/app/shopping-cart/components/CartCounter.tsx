'use client'
import React, { useState } from "react";

export const CartCounter = () => {
  const [count, setCount] = useState(0);

  const increase = () => setCount(count + 1);
  const decrease = () => setCount(count > 0 ? count - 1 : 0);
  return (
    <div className="flex flex-col items-center">
      <span className="text-9xl"> {count} </span>

      <div className="flex">
        <button
          onClick={increase}
          className="flex items-center justify-center p-2 rounded-xl bg-gray-900 text-white hover:bg-gray-600 transition-all w-[100px] mr-2"
        >
          +1
        </button>
        <button
          onClick={decrease}
          className="flex items-center justify-center p-2 rounded-xl bg-gray-900 text-white hover:bg-gray-600 transition-all w-[100px] mr-2"
        >
          -1
        </button>
      </div>
    </div>
  );
};
