import axiosInstance from "@/lib/axiosInstance";
// 글 포스팅

interface PostReaularRequest {
  content: string;
  hashtags?: string[];
  mentions?: string[];
  images?: string[];
}

export const postRegularAPI = async (data: PostReaularRequest) => {
  const res = await axiosInstance.post("/api/v1/posts/regular", data);
  console.log("반환하는것", res.data);
  return res.data;
};
