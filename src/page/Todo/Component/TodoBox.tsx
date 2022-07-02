import React from "react";

const TodoBox = () => {
  return (
    <div className="my-1 px-5 w-full h-16 flex items-center bg-white border border-blue-300 rounded-md">
      <input
        type="checkbox"
        className="mr-5 w-6 h-6 appearance-none bg-blue-50 border rounded-md border-blue-100 focus:outline-none focus:ring-0 text-blue-300 cursor-pointer"
      />
      <input className="border-b-blue-300"></input>
    </div>
  );
};

export default TodoBox;
