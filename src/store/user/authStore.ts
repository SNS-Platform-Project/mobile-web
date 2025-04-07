// zustand + persist : 새로고침에도 로그인 상태 유지

import { create } from "zustand";
import { persist } from "zustand/middleware";

interface AuthState {
  username: string; // 유저이름
  email: string; // 이메일
  accessToken: string; // JWT 액세스 토큰 (API 요청 시 사용)
  refreshToken: string; // JWT 리프레시 토큰 (액세스 토큰 재발급용)
  isLoggedIn: boolean; // 로그인 상태 여부

  // 로그인 성공 후 사용자 정보 설정 함수
  setUser: (user: Partial<AuthState>) => void;

  // 로그아웃 시 상태 초기화 함수
  clearUser: () => void;
}

const useAuthStore = create<AuthState>()(
  persist(
    (set) => ({
      // 초기 상태
      username: "",
      email: "",
      accessToken: "",
      refreshToken: "",
      isLoggedIn: false,

      // 로그인 성공 후 사용자 정보 설정 함수
      setUser: (user) =>
        set((state) => ({ ...state, ...user, isLoggedIn: true })),

      // 로그아웃 시 상태 초기화 함수
      clearUser: () =>
        set({
          username: "",
          email: "",
          accessToken: "",
          refreshToken: "",
          isLoggedIn: false,
        }),
    }),
    {
      name: "auth-storage", // 로컬 스토리지에 저장되는 키
    }
  )
);

export default useAuthStore;
