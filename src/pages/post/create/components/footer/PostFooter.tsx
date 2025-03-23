import { uploadToCloudinary } from "@/utils/uploadToCloudinary";
import { usePostStore } from "@/store/post/postStore";

import styles from "./PostFooter.module.scss";

interface PostFooterProps {
  mediaFiles: File[];
}

function PostFooter({ mediaFiles }: PostFooterProps) {
  // TODO: 모바일 키보드 해야한다.

  // ✅ store setter 불러오기
  const {
    content,
    hashtags,
    mentions,
    type,
    quotePostId,
    resetPost,
    setImages,
  } = usePostStore();

  const handleSubmit = async () => {
    if (!content.trim()) {
      alert("내용을 입력해주세요.");
      return;
    }

    try {
      let uploadedUrls: string[] = [];

      // ✅ 1. Cloudinary에 파일 업로드
      if (mediaFiles.length > 0) {
        uploadedUrls = await Promise.all(
          mediaFiles.map((file) => uploadToCloudinary(file))
        );
        // ✅ 2. store에 이미지 URL 저장
        setImages(uploadedUrls);
      }

      // ✅ 3. 요청 body 구성
      const postData = {
        content,
        ...(hashtags.length && { hashtags }),
        ...(mentions.length && { mentions }),
        ...(uploadedUrls.length && { images: uploadedUrls }),
      };

      console.log(postData);

      // // ✅ 4. 요청 URL 설정
      // const url =
      //   type === "quote"
      //     ? `/api/v1/posts/${quotePostId}/quote`
      //     : `/api/v1/posts/regular`;

      // // ✅ 5. 서버로 전송
      // const res = await fetch(url, {
      //   method: "POST",
      //   headers: { "Content-Type": "application/json" },
      //   body: JSON.stringify(postData),
      // });

      // if (!res.ok) throw new Error("업로드 실패");

      // // ✅ 6. 성공 처리
      alert("게시물이 등록되었습니다!");
      resetPost(); // 상태 초기화
    } catch (err) {
      alert("게시 중 오류가 발생했습니다.");
      console.error(err);
    }
  };

  return (
    <div className={styles.postFooter}>
      <button className={styles.postFooter__submit} onClick={handleSubmit}>
        게시
      </button>
    </div>
  );
}

export default PostFooter;
