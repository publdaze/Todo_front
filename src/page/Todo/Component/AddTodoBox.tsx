import React from "react";
import { PlusIcon } from "@heroicons/react/outline";

const AddTodoBox = () => {
  return (
    <div className="mt-16 px-5 w-full h-16 flex items-center bg-blue-50 border rounded-md">
      <PlusIcon className="mr-5 w-7 h-7 border rounded-md border-blue-100 bg-blue-300 text-white"></PlusIcon>
      <input
        className="w-full h-9 bg-transparent border-b border-blue-300 focus:outline-none placeholder:text-blue-300"
        placeholder="Todo를 입력해주세요."
      ></input>
    </div>
  );
};

export default AddTodoBox;