import React, { useState } from "react";

function Counter(props) {
  const { number, index, functions } = props;
const {handelDecriseValue,handelDeletCounter,handelPlusValue} = functions  
  return (
    <div className="flex flex-row-reverse justify-center items-center gap-5">
      <div className="btns flex gap-3 flex-row-reverse items-center">
        <button
          className="bg-red-500 px-5 py-4 rounded-xl text-white"
          onClick={() => {
            handelDeletCounter(index);
          }}
        >
          Delete
        </button>
        <button
          className="bg-gray-500 px-5 py-4 rounded-xl text-white disabled:bg-gray-400 disabled:pointer-events-none"
          onClick={()=>{
            handelDecriseValue(index)
          }}
          disabled={number <=0}
        >
          -
        </button>
        <button
          className="bg-gray-500 px-5 py-4 rounded-xl text-white"
          onClick={()=>{
            handelPlusValue(index)
          }}
        >
          +
        </button>
      </div>
      <div className="flex-row-reverse flex">
        <span className={`bg-yellow-400 p-2 rounded-md ${(number<=0) || "hidden" }`}>Zero</span>
        <span className={`bg-blue-500 text-white rounded-md p-3 ${!(number<=0) || "hidden" }`}>{number}</span>
      </div>
    </div>
  );
}

export default Counter;
