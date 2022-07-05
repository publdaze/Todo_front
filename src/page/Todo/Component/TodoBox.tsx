import React, { ChangeEventHandler, useState, useEffect } from "react";
import {
  TrashIcon,
  ChevronUpIcon,
  ChevronDownIcon,
} from "@heroicons/react/outline";

const TodoBox = (props: any) => {
  const { prevTodoList, todo, todoIdx } = props;
  const username = localStorage.getItem("username");
  const currentuser = localStorage.getItem("currentuser");
  const isMyPage = username === currentuser;

  const [todoList, setTodoList] = useState(prevTodoList);

  const handleCheckboxChange: ChangeEventHandler<HTMLInputElement> = (e) => {
    prevTodoList[todoIdx] = {
      ...prevTodoList[todoIdx],
      checked: e.target.checked,
    };
    localStorage.setItem(username + "todoList", JSON.stringify(prevTodoList));
    setTodoList(localStorage.getItem(username + "todoList"));
  };

  const handleInputChange: ChangeEventHandler<HTMLInputElement> = (e) => {
    modifyTodo(e.target.value);
  };

  const modifyTodo = (value: string) => {
    //NOTE 디바운스,useRef
    prevTodoList[todoIdx] = { ...prevTodoList[todoIdx], name: value };
    localStorage.setItem(username + "todoList", JSON.stringify(prevTodoList));
    setTodoList(localStorage.getItem(username + "todoList"));
  };

  const deleteTodo = () => {
    prevTodoList.splice(todoIdx, 1);
    localStorage.setItem(username + "todoList", JSON.stringify(prevTodoList));
    setTodoList(localStorage.getItem(username + "todoList"));
  };

  const moveTodos = (distance: number) => {
    [prevTodoList[todoIdx], prevTodoList[todoIdx + distance]] = [
      prevTodoList[todoIdx + distance],
      prevTodoList[todoIdx],
    ];
    localStorage.setItem(username + "todoList", JSON.stringify(prevTodoList));
  };

  const upTodoOrder = () => {
    if (todoIdx !== 0) {
      moveTodos(-1);
      setTodoList(localStorage.getItem(username + "todoList"));
    }
  };

  const downTodoOrder = () => {
    if (todoIdx !== prevTodoList.length - 1) {
      moveTodos(+1);
      setTodoList(localStorage.getItem(username + "todoList"));
    }
  };

  useEffect(() => {
    props.updateTodoList();
  }, [todoList]);

  return (
    <div className="flex items-center">
      <div className="my-1 px-5 w-full h-16 flex items-center bg-white border border-blue-300 rounded-md">
        <input
          type="checkbox"
          checked={todo.checked}
          className="mr-5 w-6 h-6 appearance-none bg-blue-50 border rounded-md border-blue-100 focus:outline-none focus:ring-0 text-blue-300 cursor-pointer"
          onChange={handleCheckboxChange}
          disabled={!isMyPage}
        />
        <input
          className={
            "w-full border-b-blue-300 focus:outline-none focus:border-b focus:border-blue-300 " +
            (todo.checked
              ? "line-through decoration-1 decoration-indigo-400 text-slate-400 "
              : "text-blue-800")
          }
          value={todo.name}
          onChange={handleInputChange}
          disabled={!isMyPage}
        />
        {isMyPage ? (
          <button
            className="p-1 rounded-full hover:bg-indigo-100"
            onClick={deleteTodo}
          >
            <TrashIcon className=" w-5 h-5 text-indigo-400" />
          </button>
        ) : null}
      </div>
      {isMyPage ? (
        <div className="ml-1 text-blue-500 space-y-3">
          <ChevronUpIcon
            className="w-4 h-4 hover:bg-blue-300 rounded-md"
            onClick={upTodoOrder}
          />
          <ChevronDownIcon
            className="w-4 h-4 hover:bg-blue-300 rounded-md"
            onClick={downTodoOrder}
          />
        </div>
      ) : null}
    </div>
  );
};

export default TodoBox;
