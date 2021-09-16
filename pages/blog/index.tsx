import React from "react";
import { GetServerSideProps, GetServerSidePropsResult } from "next";
import Content from "../../views/Blog";
import { fetchPosts, fetchTotalCount } from "../../service/posts";
import { BlogView } from "../../types/post";

export const getServerSideProps: GetServerSideProps = async (
  context: any
): Promise<GetServerSidePropsResult<BlogView>> => {
  let { page, tag } = context.query;
  if (tag === undefined) tag = "all";
  const total = await fetchTotalCount(tag as string);
  if (total == 0)
    return {
      props: {
        data: [],
        total: 0,
      },
    };
  if (page === undefined) page = "0";
  try {
    const query = await fetchPosts({
      tag: tag as string,
      take: 100,
      skip: +page * 10,
    });
    return {
      props: {
        data: query,
        total: total,
      },
    };
  } catch (error) {
    return {
      props: {
        data: [],
        total: 0,
      },
    };
  }
};

export default Content;
