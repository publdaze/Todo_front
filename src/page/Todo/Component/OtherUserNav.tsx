import React, { useState, useEffect } from "react";
import ScrollContainer from "react-indiana-drag-scroll";
import useLocalStorage from "../hook/useLocalStorage";

const OtherUserNav = () => {
  const tmp = ["bmeks", "daydreamlab"];

  return (
    <ScrollContainer
      horizontal={true}
      className="w-1/3 flex border-x-2 border-blue-200"
    >
      {tmp.map((t, tIdx) => (
        <button
          key={tIdx}
          className="flex-shrink-0 inline-block h-8 w-8 bg-blue-50 border-2 border-white rounded-full text-center text-slate-500 focus:border-indigo-600"
          onClick={() => {
            localStorage.setItem("currentuser", t);
            window.location.reload();
          }}
        >
          {t[0]}
        </button>
      ))}
    </ScrollContainer>
  );
};

export default OtherUserNav;
