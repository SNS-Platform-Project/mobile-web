import { useState } from "react";
import { useNavigate } from "react-router-dom";

// API
import { loginAPI } from "@/api/auth";

// 상태
import useAuthStore from "@/store/user/authStore";

import styles from "./LoginForm.module.scss";

function LoginForm() {
  // [로그인] 입력값 상태
  const [usernameOrEmail, setUsernameOrEmail] = useState("");
  const [password, setPassword] = useState("");

  // [유저] 전역 상태 설정 함수
  const { setUser } = useAuthStore();

  const navigate = useNavigate();

  // 로그인 버튼 클릭 시
  const handleLogin = async () => {
    try {
      const res = await loginAPI({ usernameOrEmail, password });

      console.log("✅ 로그인 성공:", res);
      const { accessToken, refreshToken } = res;

      setUser({
        username: usernameOrEmail.includes("@") ? "" : usernameOrEmail,
        email: usernameOrEmail.includes("@") ? usernameOrEmail : "",
        accessToken,
        refreshToken,
      });

      alert("로그인 성공!");

      navigate("/");
    } catch (error: any) {
      console.error("❌ 로그인 실패:", error.response?.data || error.message);
      alert("로그인에 실패했습니다.");
    }
  };

  return (
    <div className={styles.loginBox}>
      <input
        placeholder="사용자 이름 또는 이메일 주소"
        className={styles.loginBox__input}
        value={usernameOrEmail}
        onChange={(e) => setUsernameOrEmail(e.target.value)}
      />
      <input
        placeholder="비밀번호"
        type="password"
        className={styles.loginBox__input}
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button className={styles.loginBox__logoinButton} onClick={handleLogin}>
        로그인
      </button>

      <div className={styles.loginBox__separator}></div>

      <button className={styles.loginBox__forgotPassword}>
        비밀번호를 잊으셨나요?
      </button>
    </div>
  );
}

export default LoginForm;
