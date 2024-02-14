import React from "react";

const Heading = ({ title }) => {
  return (
    <>
      <div className="py-2 w-full text-center">
        <h1 className="text-[24px] lg:text-[30px] 2xl-[36px] font-semibold">{title} </h1>
        <div className="max-w-[150px] h-[2px] mx-auto bg-red-900 my-2"></div>
      </div>
    </>
  );
};

export default Heading;
