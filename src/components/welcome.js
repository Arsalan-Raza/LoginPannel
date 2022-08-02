import React from "react";
const welcome = () => {
  return (
    <>
      <div className="flex justify-center flex-col items-center w-[100vw] h-[80vh]">
        <h1 className="text-[3rem] text-[#39c0ed] font-bold">
          Welcome To TechOverFlow!{" "}
        </h1>
        <h1 className="text-[2rem] italic text-[#39c0ed] font-bold">
          Simple is more Creative
        </h1>
      </div>
    </>
  );
};

export default welcome;
