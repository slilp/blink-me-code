import React from "react";
import { FaLine, FaGithub, FaFacebook, FaLinkedin } from "react-icons/fa";

const Footer: React.FC = () => {
  return (
    <div className="flex items-center font-kanit p-5 bg-gray-300 bg-opacity-30 border-b backdrop-filter backdrop-blur-lg">
      <div className="flex-1 font-bold flex items-center justify-center text-xl text-gray-600">
        JUST
        <span className="mr-2 ml-2 text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-yellow-700">
          CODE
        </span>
        IT.
      </div>
      <div className="flex-1 flex justify-center text-gray-600 text-2xl">
        <a className="mr-4 cursor-pointer hover:text-gray-500" target="_blank">
          <FaLine></FaLine>
        </a>
        <a
          className="mr-4 cursor-pointer hover:text-gray-500"
          target="_blank"
          href="https://github.com/slilp"
        >
          <FaGithub></FaGithub>
        </a>
        <a
          className="mr-4 cursor-pointer hover:text-gray-500"
          target="_blank"
          href="https://www.linkedin.com/in/slil-puangpoom-1926b5154/"
        >
          <FaLinkedin></FaLinkedin>
        </a>
        <a
          className="mr-4 cursor-pointer hover:text-gray-500"
          target="_blank"
          href="https://www.facebook.com/blink.slil"
        >
          <FaFacebook></FaFacebook>
        </a>
      </div>
    </div>
  );
};

export default Footer;
