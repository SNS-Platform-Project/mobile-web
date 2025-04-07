// 업로드 파일
export const uploadToCloudinary = async (file: File) => {
  const formData = new FormData();
  formData.append("file", file);
  formData.append(
    "upload_preset",
    import.meta.env.VITE_CLOUDINARY_UPLOAD_PRESET
  );

  const res = await fetch(
    `https://api.cloudinary.com/v1_1/${
      import.meta.env.VITE_CLOUDINARY_CLOUD_NAME
    }/upload`,
    {
      method: "POST",
      body: formData,
    }
  );

  const data = await res.json();

  // console.log("데이터", data);

  // ✅ 업로드 성공 로그
  console.log("📦 클라우디너리 업로드 성공!", {
    fileName: file.name,
    url: data.secure_url,
    public_id: data.public_id,
    delete_token: data.delete_token,
  });

  return data.secure_url;
};

// 삭제
export const deleteFromCloudinary = async (publicId: string) => {
  try {
    const res = await fetch("/api/delete-image", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ public_id: publicId }),
    });

    const data = await res.json();
    return data;
  } catch (err) {
    console.error("Cloudinary 삭제 실패", err);
    return null;
  }
};
