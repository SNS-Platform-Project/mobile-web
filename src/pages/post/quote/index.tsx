import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import { usePostStore } from "@/store/post/postStore";

import PostFooter from "../create/components/footer/PostFooter";
import PostHeader from "../create/components/header/PostHeader";
import PostMediaUpload from "../create/components/mediaUpload/PostMediaUpload";
import PostTextarea from "../create/components/textarea/PostTextarea";

import styles from "../create/index.module.scss";

function Index() {
  const [mediaFiles, setMediaFiles] = useState<File[]>([]);

  const { id } = useParams(); // 경로에서 quote 대상 postId 받아오기

  const setType = usePostStore((s) => s.setType);
  const setQuotePostId = usePostStore((s) => s.setQuotePostId);

  useEffect(() => {
    setType("quote"); // quote 모드로 설정
    if (id) setQuotePostId(id); // quote 대상 postId 저장
  }, [id, setType, setQuotePostId]);

  return (
    <div className={styles.postCreate}>
      <PostHeader />
      <PostTextarea />
      <PostMediaUpload mediaFiles={mediaFiles} setMediaFiles={setMediaFiles} />
      {/* TODO: 인용 게시물의 경우 인용할 게시물의 내용을 보여줘야 합니다. */}

      <PostFooter mediaFiles={mediaFiles} />
    </div>
  );
}

export default Index;
