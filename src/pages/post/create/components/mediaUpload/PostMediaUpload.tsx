import { useRef, useState } from "react";
import styles from "./PostMediaUpload.module.scss";

import { PostMediaIcons } from "@/assets/icons";

interface PostMediaUploadProps {
  mediaFiles: File[];
  setMediaFiles: React.Dispatch<React.SetStateAction<File[]>>;
}

function PostMediaUpload({ mediaFiles, setMediaFiles }: PostMediaUploadProps) {
  // 파일 업로드 input ref
  const fileInputRef = useRef<HTMLInputElement>(null);
  // 미리보기 URL 목록
  const [previewUrls, setPreviewUrls] = useState<string[]>([]);
  // 최대 업로드 가능한 파일 수
  const MAX_UPLOAD = 4;

  // 파일 선택 시
  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    if (!files) return;

    const selectedFiles = Array.from(files);
    const totalFiles = [...mediaFiles, ...selectedFiles];

    if (totalFiles.length > MAX_UPLOAD) {
      alert(`최대 ${MAX_UPLOAD}개까지 업로드할 수 있어요.`);
      return;
    }

    const newPreviews = selectedFiles.map((file) => URL.createObjectURL(file));

    // 브라우저 내에서 이미지나 영상을 미리 볼 수 있는 URL 생성
    setMediaFiles((prev) => [...prev, ...selectedFiles]);
    setPreviewUrls((prev) => [...prev, ...newPreviews]);
  };

  // 삭제 기능
  const handleDelete = (index: number) => {
    setMediaFiles((prev) => prev.filter((_, i) => i !== index));
    setPreviewUrls((prev) => prev.filter((_, i) => i !== index));
  };

  // ✅ 실제 업로드는 글쓰기 버튼 누를 때 서버로 전달하면 됨!
  // mediaFiles 배열을 서버에 넘기기 전에 Cloudinary 업로드 처리

  return (
    <div className={styles.postMedia}>
      {/* 미리보기 */}
      <div className={styles.postMedia__preview}>
        {previewUrls.map((src, index) => (
          <div key={index} className={styles.postMedia__item}>
            {mediaFiles[index].type.startsWith("video") ? (
              <video src={src} controls className={styles.postMedia__video} />
            ) : (
              <img src={src} alt="media" className={styles.postMedia__image} />
            )}
            <button
              className={styles.postMedia__delete}
              onClick={() => handleDelete(index)}
            >
              x
            </button>
          </div>
        ))}
      </div>

      {/* 업로드 버튼 */}
      <div>
        <button
          className={styles.postMedia__upload__image}
          onClick={() => fileInputRef.current?.click()}
        >
          <PostMediaIcons.image size={26} />
        </button>
        <input
          type="file"
          accept="image/*,video/*"
          ref={fileInputRef}
          onChange={handleFileChange}
          multiple
          style={{ display: "none" }}
        />
        <button className={styles.postMedia__upload}>
          <PostMediaIcons.gif size={26} />
        </button>
        <button className={styles.postMedia__upload}>
          <PostMediaIcons.emoji size={26} />
        </button>
      </div>
    </div>
  );
}

export default PostMediaUpload;
