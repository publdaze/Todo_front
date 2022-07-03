import React, { useState, useEffect } from "react";
import AddTodoBox from "./Component/AddTodoBox";
import TodoBox from "./Component/TodoBox";
import OtherUserNav from "./Component/OtherUserNav";

const Todo = () => {
  const [todoList, setTodoList] = useState(
    JSON.parse(localStorage.getItem("todoList") || "[]")
  );
  const [add, setAdd] = useState(false);

  const clickAddBtn = (value: any) => {
    setAdd(value);
  };

  useEffect(() => {
    console.log(JSON.parse(localStorage.getItem("todoList") || "[]"));
    setTodoList(JSON.parse(localStorage.getItem("todoList") || "[]"));
  }, [add]);

  return (
    <div className="">
      <div className="mb-10 flex justify-between items-center">
        <div className=" text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-sky-400 to-indigo-500">
          MY TODO
        </div>
        <OtherUserNav />
      </div>
      <div className=" h-[438px] overflow-y-scroll">
        {todoList.map((todo: any, todoIdx: number) => (
          <TodoBox key={todoIdx} todo={todo} />
        ))}
      </div>
      <AddTodoBox todoList={todoList} value={add} clickAddBtn={clickAddBtn} />
    </div>
  );
};

export default Todo;
