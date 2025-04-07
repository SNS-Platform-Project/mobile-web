import axiosInstance from "@/lib/axiosInstance";

import { FeedListResponse } from "@/types/feed";

// 피드 (최신순)
export const getFeedLatestAPI = async (): Promise<FeedListResponse> => {
  return {
    data: [
      {
        post: {
          id: "67e6a0df1e0f4a35fc1fa72f",
          type: "post",
          createdAt: "2025-03-28T13:15:11.547+00:00",
          content: "@한주영 입니다 저는 #고양이 를 키워요 !! ",
          stat: {
            likesCount: 0,
            repostCount: 0,
            commentsCount: 0,
            viewsCount: 0,
            reactionsCount: 0,
            sharedCount: 0,
          },
          hashtags: ["고양이"],
          mentions: ["한주영"],
          images: [
            "https://res.cloudinary.com/dcx9lfhcz/image/upload/v1744022200/hojrnitlp6muz9edx4my.png",
            "https://res.cloudinary.com/dcx9lfhcz/image/upload/v1744022200/prgopmsm5vvgjo3tpcyv.png",
            "https://res.cloudinary.com/dcx9lfhcz/image/upload/v1744022200/hb4dwnaeb4mzjkcu1itp.png",
          ],
        },
        user: {
          userId: "67dd85fa51cb580af04a3cd5",
          username: "test",
          profilePictureUrl:
            "https://res.cloudinary.com/dcx9lfhcz/image/upload/v1744022006/j0no9icfqh2hxfud7mge.jpg",
        },
      },
      {
        post: {
          id: "67e6a0df1e0f4a35fc1fa72f",
          type: "quote",
          createdAt: "2025-03-28T13:15:11.547+00:00",
          original_post_id: "67e69ff71e0f4a35fc1fa729",
          content: "인용 게시물",
          stat: {
            likesCount: 0,
            repostCount: 0,
            commentsCount: 0,
            viewsCount: 0,
            reactionsCount: 0,
            sharedCount: 0,
          },
          hashtags: null,
          mentions: null,
          images: null,
        },
        user: {
          userId: "67dd85fa51cb580af04a3cd5",
          username: "test",
          profilePictureUrl: "",
        },
      },
    ],
    lastId: "67e6a0df1e0f4a35fc1fa72f",
    size: 5,
  };
};

// export const getFeedLatestAPI = async (
//   lastId: string | null = null,
//   size: number = 5
// ): Promise<FeedListResponse> => {
//   const res = await axiosInstance.get("/feed/latest", {
//     params: { lastId, size },
//   });
//   return res.data;
// };

// 피드 (추천순)
export const getFeedRecommendedAPI = async (cursor?: string, limit = 10) => {
  const res = await axiosInstance.get("/api/v1/feed/recommended", {
    params: {
      cursor: cursor || null,
      limit,
    },
  });
  return res.data;
};
