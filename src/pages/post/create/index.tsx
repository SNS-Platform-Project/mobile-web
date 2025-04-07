import { useEffect } from "react";
import { usePostStore } from "@/store/post/postStore";
import PostCreate from "./PostCreate";

function Index() {
  const { setType, resetPost } = usePostStore();

  useEffect(() => {
    setType("regular");
    return () => resetPost();
  }, []);

  return <PostCreate />;
}

export default Index;
