import { useState } from "react";

import PostFooter from "./components/footer/PostFooter";
import PostHeader from "./components/header/PostHeader";
import PostMediaUpload from "./components/mediaUpload/PostMediaUpload";
import PostTextarea from "./components/textarea/PostTextarea";

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
