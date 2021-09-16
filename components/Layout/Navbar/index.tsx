import React, { useState } from "react";
import Link from "next/link";
import { FcHome, FcOpenedFolder, FcKindle } from "react-icons/fc";
import { FaReact } from "react-icons/fa";
import { BsX, BsJustify } from "react-icons/bs";
import { useRouter } from "next/router";

interface Route {
  path: string;
  icon: React.ReactElement;
  title: string;
}

const routes: Route[] = [
  // {
  //   path: "/",
  //   icon: <FcHome></FcHome>,
  //   title: "Home",
  // },
  {
    path: "/blog?tag=all",
    icon: <FcKindle></FcKindle>,
    title: "Blog",
  },
  // {
  //   path: "/portfolio",
  //   icon: <FcOpenedFolder></FcOpenedFolder>,
  //   title: "Portfolio",
  // },
  // {
  //   path: "/me",
  //   icon: <FaReact></FaReact>,
  //   title: "About me",
  // },
];

const Navbar: React.FC = () => {
  const router = useRouter();
  const [open, setOpen] = useState<boolean>(false);

  return (
    <div className="z-40 rounded-3xl  container mx-auto w-11/12  bg-white font-kanit shadow sticky top-1">
      <div className="flex justify-center align-middle p-3">
        <Link href="/" key="home">
          <div className="flex-1 pl-3 text-2xl font-bold flex items-center cursor-pointer justify-center lg:justify-start">
            <span className="font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-yellow-700">
              {`BLINK ME CODE </>`}
            </span>
          </div>
        </Link>

        <div className="hidden lg:flex flex-1 space-x-8  justify-end items-center">
          {routes.map((route: Route) => (
            <Link href={route.path} key={route.title}>
              <div className="flex items-center space-x-2 cursor-pointer py-2 hover:border-yellow-400 border-b-2 border-white">
                <span className="text-xl">{route.icon}</span>
                <span>{route.title}</span>
              </div>
            </Link>
          ))}
        </div>

        <div className="flex lg:invisible items-center cursor-pointer justify-end">
          <span className="text-3xl" onClick={() => setOpen(!open)}>
            {open ? <BsX></BsX> : <BsJustify></BsJustify>}
          </span>
        </div>
      </div>
      {open && (
        <>
          <div className="py-3 lg:hidden">
            {routes.map((route: Route) => (
              <>
                <Link href={route.path} key={route.title}>
                  <div className="grid grid-cols-2">
                    <div
                      className="flex items-center px-3 space-x-3 py-3 cursor-pointer"
                      onClick={() => setOpen(!open)}
                    >
                      <span className="text-xl">{route.icon}</span>
                      <span>{route.title}</span>
                    </div>
                    <div></div>
                  </div>
                </Link>
              </>
            ))}
            <br></br>
          </div>
        </>
      )}
    </div>
  );
};

export default Navbar;
