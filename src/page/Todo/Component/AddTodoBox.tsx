import React, { useState, ChangeEventHandler, FormEventHandler } from "react";
import { PlusIcon } from "@heroicons/react/outline";

const AddTodoBox = (props: any) => {
  const [todo, setTodo] = useState("");
  const prevTodoList = props.todoList;

  const handleInputChange: ChangeEventHandler<HTMLInputElement> = (e) => {
    setTodo(e.target.value);
  };

  const handleSubmit: FormEventHandler = (e) => {
    e.preventDefault();

    localStorage.setItem("todoList", JSON.stringify([...prevTodoList, todo]));
    props.updateTodoList(!props.value);
    setTodo(""); // input창 비우기
  };

  return (
    <form
      className="mt-16 px-5 w-full h-16 flex items-center bg-blue-50 border rounded-md"
      onSubmit={handleSubmit}
    >
      <button
        type="submit"
        className="mr-5 w-7 h-7 border rounded-md border-blue-100 bg-blue-300 text-white"
      >
        <PlusIcon />
      </button>
      <input
        className="w-full h-9 bg-transparent border-b border-blue-300 focus:outline-none placeholder:text-blue-300"
        placeholder="Todo를 입력해주세요."
        onChange={handleInputChange}
        value={todo}
      />
    </form>
  );
};

export default AddTodoBox;
