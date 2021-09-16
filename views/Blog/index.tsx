import React from "react";
import { useRouter } from "next/router";
import { Container, Tag, Card, Header, Loading } from "../../components";
import { BlogView, BlogApiResponse } from "../../types/post";
import { BsInboxes } from "react-icons/bs";

const Blog: React.FC<BlogView> = ({ data, total }) => {
  const router = useRouter();

  if (router.isFallback) {
    return <Loading />;
  }

  return (
    <>
      <Container>
        <Header />
        <Tag />
        <div className="mt-5">
          <div className="flex items-center space-x-3  border-b-4  border-gray-700">
            <span className="inline-block bg-gray-700 text-white p-2">
              Topics ( {total} )
            </span>
          </div>
          <br></br>
          {data.length > 0 ? (
            <div className="md:px-10 px-3 rounded-3xl bg-gray-200 bg-opacity-30 border-none backdrop-filter backdrop-blur-lg">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                {data.map((item: BlogApiResponse) => (
                  <>
                    <Card
                      key={item.id}
                      id={item.id}
                      title={item.title}
                      cover={item.image.url}
                      desc={item.desc}
                    ></Card>
                  </>
                ))}
              </div>
            </div>
          ) : (
            <div className="flex h-60 flex-col justify-center items-center text-gray-400">
              <p className="text-3xl mb-5">
                <BsInboxes></BsInboxes>
              </p>
              <p className="text-xl">NOT FOUND DATA</p>
            </div>
          )}
        </div>
      </Container>
    </>
  );
};

export default Blog;
