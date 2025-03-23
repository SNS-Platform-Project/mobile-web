import { create } from "zustand";

// 일반게시물 | 인용게시물
type PostType = "regular" | "quote";

interface PostStoreState {
  type: PostType;
  content: string;
  hashtags: string[];
  mentions: string[];
  images: string[];
  quotePostId?: string;

  // setter
  setType: (type: PostType) => void;
  setContent: (value: string) => void;
  setHashtags: (tags: string[]) => void;
  setMentions: (users: string[]) => void;
  setImages: (urls: string[]) => void;
  setQuotePostId: (id: string) => void;

  // 초기화
  resetPost: () => void;
}

export const usePostStore = create<PostStoreState>((set) => ({
  type: "regular",
  content: "",
  hashtags: [],
  mentions: [],
  images: [],
  quotePostId: undefined,

  setType: (type) => set({ type }),
  setContent: (value) => set({ content: value }),
  setHashtags: (tags) => set({ hashtags: tags }),
  setMentions: (users) => set({ mentions: users }),
  setImages: (urls) => set({ images: urls }),
  setQuotePostId: (id) => set({ quotePostId: id }),

  resetPost: () =>
    set({
      type: "regular",
      content: "",
      hashtags: [],
      mentions: [],
      images: [],
      quotePostId: undefined,
    }),
}));
