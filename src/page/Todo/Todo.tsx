import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

import AddTodoBox from "./Component/AddTodoBox";
import TodoBox from "./Component/TodoBox";
import OtherUserNav from "./Component/OtherUserNav";

// import profileAPI from "API/api";

const Todo = () => {
  const navigate = useNavigate();
  const username = localStorage.getItem("username");
  const currentuser = localStorage.getItem("currentuser");
  const [todoList, setTodoList] = useState(
    JSON.parse(localStorage.getItem(username + "todoList") || "[]")
  );
  const [update, setUpdate] = useState(false);

  useEffect(() => {
    if (localStorage.getItem("token") === null) navigate("/signIn");
  }, []);

  const updateTodoList = (value: any) => {
    setUpdate(value);
  };

  useEffect(() => {
    //const token: any = localStorage.getItem("token") || "";
    /* profileAPI
      .profile({ token: localStorage.getItem("token") })
      .then((data: any) => {
        if (data?.statusCode === 401) {
          //navigate("/signIn");
        }
        console.log(data);
      }); */
  }, []);

  useEffect(() => {
    //console.log(JSON.parse(localStorage.getItem("todoList") || "[]"));
    setTodoList(
      JSON.parse(localStorage.getItem(currentuser + "todoList") || "[]")
    );
  }, [update]);

  return (
    <div className="">
      <div className="mb-10 flex justify-between items-center">
        <div className=" text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-sky-400 to-indigo-500">
          {currentuser}'s <br /> TODO
        </div>
        <OtherUserNav value={update} updateTodoList={updateTodoList} />
      </div>
      <div className=" h-[438px] overflow-y-scroll">
        {todoList.map((todo: any, todoIdx: number) => (
          <TodoBox
            key={todoIdx}
            todoList={todoList}
            todo={todo}
            todoIdx={todoIdx}
            value={update}
            updateTodoList={updateTodoList}
          />
        ))}
      </div>
      {currentuser === username ? (
        <AddTodoBox
          todoList={todoList}
          value={update}
          updateTodoList={updateTodoList}
        />
      ) : null}
    </div>
  );
};

export default Todo;
