import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { usePostStore } from "@/store/post/postStore";
import PostCreate from "../create/PostCreate";

function Index() {
  const { setType, setQuotePostId, resetPost } = usePostStore();

  useEffect(() => {
    const { id } = useParams(); // 인용 대상 게시물 ID
    return () => resetPost();
  }, []);

  useEffect(() => {
    setType("quote");
    if (id) setQuotePostId(id);
    return () => resetPost();
  }, [id]);

  return <PostCreate />;
}

export default Index;
