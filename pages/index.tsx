import { NextPage } from "next";
import Link from "next/link";
import { FcServices } from "react-icons/fc";

const Home: NextPage = () => {
  return (
    <div
      style={{ minHeight: "75vh" }}
      className="flex flex-col gap-5 justify-center items-center"
    >
      <p className="text-7xl text-gray-400">
        <FcServices></FcServices>
      </p>
      {/* <p className="text-4xl text-gray-400">404</p> */}
      <p className="text-2xl text-gray-400">INCOMING PAGE</p>
      <Link href="/blog?tag=all">
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full">
          GO TO BLOG
        </button>
      </Link>
    </div>
  );
};

export default Home;
