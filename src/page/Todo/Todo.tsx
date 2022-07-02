import React from "react";
import AddTodoBox from "./Component/AddTodoBox";
import TodoBox from "./Component/TodoBox";
import OtherUserNav from "./Component/OtherUserNav";

const Todo = () => {
  const tmp = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  return (
    <div className="">
      <div className="mb-10 flex justify-between items-center">
        <div className=" text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-sky-400 to-indigo-500">
          MY TODO
        </div>
        <OtherUserNav />
      </div>
      <div className=" h-[438px] overflow-y-scroll">
        {tmp.map((t) => (
          <TodoBox key={t} />
        ))}
      </div>
      <AddTodoBox />
    </div>
  );
};

export default Todo;
