import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

import AddTodoBox from "./Component/AddTodoBox";
import TodoBox from "./Component/TodoBox";
import useLocalStorage from "./hook/useLocalStorage";

// import profileAPI from "API/api";

const Todo = () => {
  const navigate = useNavigate();
  const username = localStorage.getItem("username");
  const currentuser = localStorage.getItem("currentuser");
  const [todoList, setTodoList] = useLocalStorage(currentuser + "todoList", []);

  useEffect(() => {
    if (localStorage.getItem("token") === null) navigate("/signIn");
  }, []);

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

  const updateTodoList = () => {
    console.log(currentuser);
    setTodoList(
      JSON.parse(localStorage.getItem(currentuser + "todoList") || "[]")
    );
  };

  return (
    <div className="">
      <div className="mb-10 flex justify-between items-center">
        <div className=" text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-sky-400 to-indigo-500">
          {currentuser}'s <br /> TODO
        </div>
      </div>
      <div className=" h-[438px] overflow-y-scroll">
        {todoList.map((todo: any, todoIdx: number) => (
          <TodoBox
            key={todoIdx}
            todo={todo}
            todoIdx={todoIdx}
            prevTodoList={todoList}
            updateTodoList={updateTodoList}
          />
        ))}
      </div>
      {currentuser === username ? (
        <AddTodoBox prevTodoList={todoList} updateTodoList={updateTodoList} />
      ) : null}
    </div>
  );
};

export default Todo;
