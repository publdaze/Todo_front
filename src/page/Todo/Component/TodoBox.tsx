import React, { useState } from "react";

const TodoBox = ({ todo }: any) => {
  const [checkTodo, setCheckTodo] = useState(false);
  const onClick = () => {
    setCheckTodo((prev) => !prev);
  };

  return (
    <div className="my-1 px-5 w-full h-16 flex items-center bg-white border border-blue-300 rounded-md">
      <input
        type="checkbox"
        className="mr-5 w-6 h-6 appearance-none bg-blue-50 border rounded-md border-blue-100 focus:outline-none focus:ring-0 text-blue-300 cursor-pointer"
        onClick={onClick}
      />
      <input
        className={
          "w-full border-b-blue-300 " +
          (checkTodo
            ? "line-through decoration-1 decoration-indigo-400 placeholder:text-slate-400 "
            : "placeholder:text-blue-800")
        }
        placeholder={todo}
      />
    </div>
  );
};

export default TodoBox;
