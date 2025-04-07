// 피드
export type FeedPost = {
  post: {
    id: string;
    type: "post" | "quote";
    createdAt: string;
    content: string;
    original_post_id?: string;
    stat: {
      likesCount: number;
      repostCount: number;
      commentsCount: number;
      viewsCount: number;
      reactionsCount: number;
      sharedCount: number;
    };
    hashtags: string[] | null;
    mentions: string[] | null;
    images: string[] | null;
  };
  user: {
    userId: string;
    username: string;
    profilePictureUrl: string | null;
  };
};

export type FeedListResponse = {
  data: FeedPost[];
  lastId: string | null;
  size: number;
};
