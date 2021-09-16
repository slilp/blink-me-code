import React from "react";
import { BsFillXCircleFill } from "react-icons/bs";

function Notfound() {
  return (
    <div
      style={{ minHeight: "75vh" }}
      className="flex flex-col gap-5 justify-center items-center"
    >
      <p className="text-7xl text-gray-400">
        <BsFillXCircleFill></BsFillXCircleFill>
      </p>
      {/* <p className="text-4xl text-gray-400">404</p> */}
      <p className="text-2xl text-gray-400">NOT FOUND PAGE</p>
    </div>
  );
}

export default Notfound;
