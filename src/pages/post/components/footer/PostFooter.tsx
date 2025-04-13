import { uploadToCloudinary } from "@/utils/uploadToCloudinary";
import { usePostStore } from "@/store/post/postStore";

import styles from "./PostFooter.module.scss";
import { postRegularAPI } from "@/api/post";

interface PostFooterProps {
  mediaFiles: File[];
}

function PostFooter({ mediaFiles }: PostFooterProps) {
  // TODO: 모바일 키보드 해야한다.

  // ✅ store setter 불러오기
  const { content, hashtags, mentions, resetPost, setImages } = usePostStore();

  const handleSubmit = async () => {
    try {
      let uploadedImages = [];

      // ✅ 1. Cloudinary에 파일 업로드
      if (mediaFiles.length > 0) {
        uploadedImages = await Promise.all(
          mediaFiles.map((file) => uploadToCloudinary(file))
        );
        // ✅ 2. store에 이미지 URL 저장
        setImages(uploadedImages);
      }

      // ✅ 3. 요청 body 구성
      const postData = {
        content,
        ...(hashtags.length && { hashtags }),
        ...(mentions.length && { mentions }),
        ...(uploadedImages.length && { images: uploadedImages }),
      };

      console.log(postData);

      // ✅ 4. 서버로 전송
      await postRegularAPI(postData);

      // // ✅ 5. 성공 처리
      alert("게시물이 등록되었습니다!");
      resetPost(); // 상태 초기화
    } catch (err) {
      alert("게시 중 오류가 발생했습니다.");
      console.error(err);
    }
  };

  return (
    <div className={styles.postFooter}>
      {(content.trim() || mediaFiles.length > 0) && (
        <button className={styles.postFooter__submit} onClick={handleSubmit}>
          게시
        </button>
      )}
    </div>
  );
}

export default PostFooter;
