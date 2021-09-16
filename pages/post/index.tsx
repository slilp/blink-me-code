import { GetServerSidePropsResult, GetServerSideProps } from "next";
import Post from "../../views/Post";
import { PostView } from "../../types/post";
import { fetchContent, fetchPostById } from "../../service/posts";

export const getServerSideProps: GetServerSideProps = async (
  context: any
): Promise<GetServerSidePropsResult<PostView>> => {
  let { topic } = context.query;

  if (topic === undefined) {
    return {
      redirect: {
        permanent: false,
        destination: "/blog?tag=all",
      },
      props: {},
    };
  }

  try {
    const blog = await fetchPostById(topic);

    const info = await fetchContent(blog.post);

    blog.content = info.content;

    return {
      props: {
        data: blog,
      },
    };
  } catch (error) {
    return {
      props: {},
    };
  }
};

// export const getStaticProps: GetStaticProps = async (
//   context: any
// ): Promise<GetStaticPropsResult<PostView>> => {
//   try {
//     const content = await fetchContent(context?.params?.id);

//     return {
//       props: {
//         data: content,
//       },
//     };
//   } catch (error) {
//     return {
//       props: {},
//     };
//   }
// };

// export const getStaticPaths: GetStaticPaths =
//   async (): Promise<GetStaticPathsResult> => {
//     const count = await fetchTotalCount("all");
//     const allPostId = new Array(count);
//     const paths = allPostId.map((_: any, i: number) => ({
//       params: { id: i + "" },
//     }));
//     return {
//       paths,
//       fallback: true,
//     };
//   };

export default Post;
