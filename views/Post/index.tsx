import React from "react";
import { useRouter } from "next/router";
import {
  Markdown,
  Share,
  Container,
  Breadcrumbs,
  Loading,
} from "../../components";
import { PostView } from "../../types/post";
import { BsInboxes } from "react-icons/bs";
import { API_PATH } from "../../service/posts";
import Link from "next/link";

const Post: React.FC<PostView> = ({ data }) => {
  const router = useRouter();

  if (router.isFallback) {
    return <Loading />;
  }

  return (
    <>
      {data ? (
        <Container>
          <Breadcrumbs
            data={[
              { label: "Blog", path: "/blog?tag=all" },
              { label: data?.title || "", path: "" },
            ]}
          />
          <br></br>
          <p className="text-3xl mb-5 text-center">{data?.title || ""}</p>
          <img
            className="object-contain lg:h-96 lg:w-full h-64  mx-auto"
            src={`${API_PATH}${data.image.url}`}
          ></img>
          <br></br>
          <div className="grid lg:grid-cols-5 grid-cols-1">
            <div className="lg:col-span-1 flex justify-center order-1 lg:order-none h-full">
              <Share />
            </div>
            <div className="lg:col-span-3 md:mx-auto">
              <Markdown content={data?.content || ""} />
            </div>
            <div className="lg:col-span-1"></div>
          </div>
        </Container>
      ) : (
        <Container>
          <div className="flex h-60 flex-col justify-center items-center text-gray-400">
            <p className="text-3xl mb-5">
              <BsInboxes></BsInboxes>
            </p>
            <p className="text-xl">NOT FOUND DATA</p>
            <br></br>
            <Link href="/blog?tag=all">
              <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full">
                BACK TO BLOG
              </button>
            </Link>
          </div>
        </Container>
      )}
    </>
  );
};

export default Post;
