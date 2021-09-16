import React from "react";
// import Link from "next/link";
import { FcLikePlaceholder } from "react-icons/fc";

function Header() {
  return (
    <div className="mb-10 text-center">
      <p className="text-7xl font-bold mb-5">
        <span className="ml-2 text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-yellow-700">
          MY BLOG
        </span>
      </p>
      <div className="flex justify-center items-center text-gray-400 text-xl mb-5 ">
        <span className="mr-3">
          <FcLikePlaceholder></FcLikePlaceholder>
        </span>
        <span>For All Guy Who Love Coding</span>
      </div>
      {/* <Link href="/me">
        <button className="mx-auto bg-yellow-500 hover:bg-yellow-600 text-white font-bold py-2 px-4 rounded">
          ABOUT ME
        </button>
      </Link> */}
    </div>
  );
}

export default Header;
