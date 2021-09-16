import React, { useState, useEffect } from "react";
import { FaTwitter, FaLinkedinIn, FaFacebookSquare } from "react-icons/fa";

function Share() {
  const [url, setUrl] = useState<string>("");
  useEffect(function mount() {
    setUrl(window.location.href);
  }, []);

  return (
    <div>
      <ul className="sticky top-20">
        <br></br>
        <li className="mb-5 float-left lg:float-none mx-2">SHARE</li>
        <li className="mb-5 float-left mx-2 ">
          <a
            href={`https://www.facebook.com/sharer/sharer.php?u=${url}`}
            target="_blank"
          >
            <div className=" transition duration-200 text-3xl cursor-pointer text-gray-400 hover:text-gray-800">
              <span>
                <FaFacebookSquare></FaFacebookSquare>
              </span>
            </div>
          </a>
        </li>
        <li className="mb-5 float-left lg:float-none mx-2">
          <a href={`https://twitter.com/share?url=${url}`} target="_blank">
            <div className="transition duration-200 text-3xl cursor-pointer text-gray-400 hover:text-gray-800">
              <span>
                <FaTwitter></FaTwitter>
              </span>
            </div>
          </a>
        </li>
        <li className="mb-5 float-left lg:float-none mx-2">
          <a
            href={`https://www.linkedin.com/shareArticle?url=${url}`}
            target="_blank"
          >
            <div className="transition duration-200 text-3xl cursor-pointer text-gray-400 hover:text-gray-800">
              <span>
                <FaLinkedinIn></FaLinkedinIn>
              </span>
            </div>
          </a>
        </li>
      </ul>
    </div>
  );
}

export default Share;
