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

  // ✅ 업로드 성공 로그
  console.log("📦 클라우디너리 업로드 성공!", {
    fileName: file.name,
    url: data.secure_url,
  });

  return data.secure_url; // ✅ 서버에 전달할 URL 반환 !!
};
