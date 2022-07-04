import React from "react";
import ScrollContainer from "react-indiana-drag-scroll";

const OtherUserNav = (props: any) => {
  const tmp = ["bmeks", "daydreamlab"];

  return (
    <ScrollContainer
      horizontal={true}
      className="w-1/3 flex border-x-2 border-blue-200 rounded"
    >
      {tmp.map((t, tIdx) => (
        <button
          key={tIdx}
          className="flex-shrink-0 inline-block h-8 w-8 bg-blue-50 border-2 border-white rounded-full text-center text-slate-500"
          onClick={() => {
            localStorage.setItem("currentuser", tmp[tIdx]);
            props.updateTodoList(!props.value);
          }}
        >
          {t[0]}
        </button>
      ))}
    </ScrollContainer>
  );
};

export default OtherUserNav;
