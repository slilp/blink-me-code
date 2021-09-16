interface CoverImage {
  name: string;
  url: string;
}

export interface BlogApiResponse {
  id: number;
  title: string;
  desc: string;
  tag: string;
  content: string;
  image: CoverImage;
  updated_at: Date;
  status: boolean;
  post: number;
}

export interface PostApiResponse {
  id: number;
  content: string;
}

export interface BlogApiRequest {
  tag: string;
  take: number;
  skip: number;
}

export interface BlogView {
  data: BlogApiResponse[];
  total: number;
}

export interface PostView {
  data?: BlogApiResponse;
}
