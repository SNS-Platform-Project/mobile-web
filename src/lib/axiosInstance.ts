import axios from "axios"
import useAuthStore from "@/store/user/authStore"

// ✅ 기본 axios 인스턴스 생성
const axiosInstance = axios.create({
  baseURL: import.meta.env.VITE_API_URL, // .env에 API 주소 넣기
  withCredentials: true, // 쿠키 사용하는 경우 true
});

// ✅ 요청 인터셉터 - accessToken 자동 헤더 설정
axiosInstance.interceptors.request.use(
  (config) => {
    const { accessToken } = useAuthStore.getState();
    if (accessToken) {
      config.headers.Authorization = `Bearer ${accessToken}`;
    }
    return config;
  },
  (error) => Promise.reject(error)
);

export default axiosInstance;