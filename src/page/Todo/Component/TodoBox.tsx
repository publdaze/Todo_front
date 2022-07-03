import React, { useState, ChangeEventHandler } from "react";

const TodoBox = (props: any) => {
  const { todoList, todo, todoIdx } = props;
  const [checkTodo, setCheckTodo] = useState(false);

  const onClick = () => {
    setCheckTodo((prev) => !prev);
  };

  const handleInputChange: ChangeEventHandler<HTMLInputElement> = (e) => {
    modifyTodo(e.target.value);
  };

  const modifyTodo = (value: any) => {
    todoList[todoIdx] = value;
    localStorage.setItem("todoList", JSON.stringify(todoList));
    props.updateTodoList(!props.value);
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
          "w-full border-b-blue-300 focus:outline-none focus:border-b focus:border-blue-300 " +
          (checkTodo
            ? "line-through decoration-1 decoration-indigo-400 text-slate-400 "
            : "text-blue-800")
        }
        value={todo}
        onChange={handleInputChange}
      />
    </div>
  );
};

export default TodoBox;
