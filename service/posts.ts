import axios from "axios";
import {
  BlogApiResponse,
  BlogApiRequest,
  PostApiResponse,
} from "../types/post";

export const API_PATH = "https://serene-brook-70356.herokuapp.com";

export const fetchPosts = async ({
  tag,
  take,
  skip,
}: BlogApiRequest): Promise<BlogApiResponse[]> => {
  try {
    const path =
      tag === "all"
        ? `${API_PATH}/blogs?_start=${skip}&_limit=${take}`
        : `${API_PATH}/blogs?tag=${tag.toUpperCase()}&_start=${skip}&_limit=${take}`;

    const response = await axios.get<BlogApiResponse[]>(path);
    if (response.status !== 200) {
      throw Error(response.statusText);
    }
    return response.data;
  } catch (error: any) {
    throw Error(error);
  }
};

export const fetchTotalCount = async (tag: string): Promise<number> => {
  try {
    const path =
      tag === "all"
        ? `${API_PATH}/blogs/count`
        : `${API_PATH}/blogs/count?tag=${tag.toUpperCase()}`;
    const response = await axios.get<number>(path);
    if (response.status !== 200) {
      throw Error(response.statusText);
    }
    return response.data;
  } catch (error: any) {
    throw Error(error);
  }
};

export const fetchPostById = async (id: number): Promise<BlogApiResponse> => {
  try {
    const response = await axios.get<BlogApiResponse>(
      `${API_PATH}/blogs/${id}`
    );
    if (response.status !== 200) {
      throw Error(response.statusText);
    }
    return response.data;
  } catch (error: any) {
    throw Error(error);
  }
};

export const fetchContent = async (id: number): Promise<PostApiResponse> => {
  try {
    const response = await axios.get<PostApiResponse>(
      `${API_PATH}/posts/${id}`
    );
    if (response.status !== 200) {
      throw Error(response.statusText);
    }
    return response.data;
  } catch (error: any) {
    throw Error(error);
  }
};
