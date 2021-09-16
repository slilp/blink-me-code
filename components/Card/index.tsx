import React from "react";
import Link from "next/link";
import { FaCalendarAlt } from "react-icons/fa";
import { API_PATH } from "../../service/posts";

interface CardProps {
  id: number;
  title: string;
  cover: string;
  desc: string;
}

function Card({ id, title, cover, desc }: CardProps) {
  return (
    <Link href={`/post?topic=${id}`}>
      <div className="flex-col shadow rounded-3xl md:m-5 m-3 flex space-x-3 cursor-pointer hover:-translate-y-2 transform transition duration-300 bg-white">
        <img
          className="w-full h-40 md:h-44  object-full rounded-t-3xl"
          src={`${API_PATH}${cover}`}
          alt=""
        />
        <div className="my-5 px-2">
          <p className="lg:text-lg text-base">{title}</p>
          <p className="lg:text-base text-sm text-gray-400">{desc}</p>
        </div>
        <div className="flex m-3 text-sm">
          <div className="ml-3">
            <img
              className="inline-block h-8 w-8 rounded-full ring-2 ring-white"
              src="https://images.unsplash.com/photo-1491528323818-fdd1faba62cc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
            />
            <span className="text-gray-400 ml-3">blink</span>
          </div>
          <div className="flex flex-1 justify-end items-center mr-5 text-gray-400">
            <span className="mr-1">
              <FaCalendarAlt></FaCalendarAlt>
            </span>
            12-08-2021
          </div>
        </div>
      </div>
    </Link>
  );
}

export default Card;
