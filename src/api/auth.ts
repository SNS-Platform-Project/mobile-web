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

// 이메일 인증
interface EmailVerifiactionRequest {
  email: string;
}
export const emailVerifiactionAPI = async (data: EmailVerifiactionRequest) => {
  await axiosInstance.post("/api/v1/auth/email/verify-request", data);
};
// 이메일 코드 확인
interface EmailCodeVerifyRequest {
  email: string;
  authCode: string;
}
export const verifyEmailCodeAPI = async (data: EmailCodeVerifyRequest) => {
  const res = await axiosInstance.post("/api/v1/auth/email/verify", data);
  return console.log("인증확인", res);
};
export interface SignUpRequest {
  username: string;
  email: string;
  password: string;
}
// 회원가입
export const sginUpAPI = async (data: SignUpRequest) => {
  return await axiosInstance.post("/api/v1/auth/register", data);
};
