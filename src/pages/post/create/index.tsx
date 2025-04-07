import { useState } from "react";

import PostFooter from "@pages/post/components/footer/PostFooter";
import PostHeader from "@pages/post/components/header/PostHeader";
import PostMediaUpload from "@pages/post/components/mediaUpload/PostMediaUpload";
import PostTextarea from "@pages/post/components/textarea/PostTextarea";

import styles from "./index.module.scss";

function Index() {
  const [mediaFiles, setMediaFiles] = useState<File[]>([]);

  return (
    <div className={styles.postCreate}>
      <PostHeader />
      <PostTextarea />
      <PostMediaUpload mediaFiles={mediaFiles} setMediaFiles={setMediaFiles} />
      <PostFooter mediaFiles={mediaFiles} />
    </div>
  );
}

export default Index;
