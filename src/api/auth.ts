import axiosInstance from "@/lib/axiosInstance";

// 로그인
interface LoginRequest {
  usernameOrEmail: string;
  password: string;
}
interface LoginResponse {
  accessToken: string;
  refreshToken: string;
  grantType: string;
  refreshIseAt: string;
  refreshExpAt: string;
}
export const loginAPI = async (data: LoginRequest): Promise<LoginResponse> => {
  const res = await axiosInstance.post("/api/v1/auth/login", data);
  return res.data;
};

// 로그아웃
export const logoutAPI = async () => {
  const res = await axiosInstance.post("/api/v1/auth/logout");
  return res.data;
};
