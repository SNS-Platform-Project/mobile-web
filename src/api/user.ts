import axiosInstance from "@/lib/axiosInstance";

/** 유저네임 중복 체크 */
export const userNameCheckAPI = async (username: string): Promise<boolean> => {
  const res = await axiosInstance.get(`/api/v1/users/check-username`, {
    params: { username }, // → ?username=값
  });
  return res.data; // 서버 응답이 true 또는 false (중복 X / O)
};
