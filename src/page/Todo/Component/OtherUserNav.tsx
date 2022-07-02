import React from "react";
import ScrollContainer from "react-indiana-drag-scroll";

const OtherUserNav = () => {
  const tmp = ["김", "이", "박", "정", "강", "김", "정", "강", "김"];
  return (
    <ScrollContainer
      horizontal={true}
      className="w-1/3 flex border-x-2 border-blue-200 rounded"
    >
      {tmp.map((t, tIdx) => (
        <div
          key={tIdx}
          className="flex-shrink-0 inline-block h-8 w-8 bg-blue-50 border-2 border-white rounded-full text-center text-slate-500"
        >
          {t}
        </div>
      ))}
    </ScrollContainer>
  );
};

export default OtherUserNav;
