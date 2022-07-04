import React, { ChangeEventHandler } from "react";
import {
  TrashIcon,
  ChevronUpIcon,
  ChevronDownIcon,
} from "@heroicons/react/outline";

const TodoBox = (props: any) => {
  const { todoList, todo, todoIdx } = props;
  const username = localStorage.getItem("username");
  const currentuser = localStorage.getItem("currentuser");
  const isMyPage = username === currentuser;

  const handleCheckboxChange: ChangeEventHandler<HTMLInputElement> = (e) => {
    todoList[todoIdx] = { ...todoList[todoIdx], checked: e.target.checked };
    localStorage.setItem(username + "todoList", JSON.stringify(todoList));
    props.updateTodoList(!props.value);
  };

  const handleInputChange: ChangeEventHandler<HTMLInputElement> = (e) => {
    modifyTodo(e.target.value);
  };

  const modifyTodo = (value: any) => {
    todoList[todoIdx] = { ...todoList[todoIdx], name: value };
    localStorage.setItem(username + "todoList", JSON.stringify(todoList));
    props.updateTodoList(!props.value);
  };

  const deleteTodo = () => {
    todoList.splice(todoIdx, 1);
    localStorage.setItem(username + "todoList", JSON.stringify(todoList));
    props.updateTodoList(!props.value);
  };

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
            onClick={() => {
              if (todoIdx !== 0) {
                [todoList[todoIdx], todoList[todoIdx - 1]] = [
                  todoList[todoIdx - 1],
                  todoList[todoIdx],
                ];
                localStorage.setItem(
                  username + "todoList",
                  JSON.stringify(todoList)
                );
                props.updateTodoList(!props.value);
              }
            }}
          />
          <ChevronDownIcon
            className="w-4 h-4 hover:bg-blue-300 rounded-md"
            onClick={() => {
              if (todoIdx !== todoList.length - 1) {
                [todoList[todoIdx], todoList[todoIdx + 1]] = [
                  todoList[todoIdx + 1],
                  todoList[todoIdx],
                ];
                localStorage.setItem(
                  username + "todoList",
                  JSON.stringify(todoList)
                );
                props.updateTodoList(!props.value);
              }
            }}
          />
        </div>
      ) : null}
    </div>
  );
};

export default TodoBox;
