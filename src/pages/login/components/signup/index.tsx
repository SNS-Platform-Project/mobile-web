import { useState } from "react";
import Header from "@/components/header/Header";

// API
import {
  emailVerifiactionAPI,
  verifyEmailCodeAPI,
  sginUpAPI,
} from "@/api/auth";

import styles from "./index.module.scss";

import { CommonIcon } from "@/assets/icons";

interface SignupProps {
  onClose: () => void;
}

function Index({ onClose }: SignupProps) {
  const [isPrivacyOpen, setIsPrivacyOpen] = useState(false); // 약관 모달 상태
  const [isAgreed, setIsAgreed] = useState(false); // 체크박스 상태

  const [email, setEmail] = useState("");
  const [isEmailRequested, setIsEmailRequested] = useState(false);
  const [authCode, setAuthCode] = useState("");

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  // 이메일 인증 요청
  const handleRequestEmail = async () => {
    console.log("코드 전송");
    try {
      await emailVerifiactionAPI({ email });

      alert("이메일로 인증코드를 전송했어요. 10분 안에 입력해주세요 !");
    } catch (err: any) {
      console.error("이메일 인증 요청 실패", err);
      alert(
        err?.response?.data?.message || "이메일 인증 요청 중 오류가 발생했어요."
      );
    }
  };
  // 이메일 인증 확인
  const handleVerifyCode = async () => {
    console.log("인증 확인");
    try {
      await verifyEmailCodeAPI({ email, authCode });
      alert("이메일 인증이 완료 되었습니다.");
      setIsEmailRequested(true);
    } catch (err) {
      console.error("이메일 인증 실패", err);
      alert("인증 코드가 올바르지 않아요.");
    }
  };

  const handleSignup = async () => {
    console.log("가입");
    try {
      await sginUpAPI(username, email, password);
      alert("가입이 완료 되었습니다.");
      setIsEmailRequested(true);
    } catch (err) {
      console.error("가입실패", err);
      alert("가입 실패");
    }
  };
  return (
    <div className={styles.overlay}>
      <div className={styles.modal}>
        {/* 닫기 버튼 (우측 상단 아이콘) */}
        <button className={styles.closeButton} onClick={onClose}>
          <CommonIcon.close />
        </button>

        <Header type="login" />

        {/* 회원가입 안내 문구 */}
        <div>
          <h1>
            Stacks에서 자유롭게 이야기하고 소통하세요! <br />
            지금 가입하세요.
          </h1>
        </div>

        {/* 🔹 회원가입 입력 폼 */}
        <div className={styles.form}>
          <input
            placeholder="이름"
            className={styles.input}
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />

          {/* 🔹 이메일 + 인증 코드 */}
          <div className={styles.emailBox}>
            <input
              placeholder="이메일"
              className={styles.input}
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <button
              className={styles.verifyButton}
              onClick={handleRequestEmail}
            >
              인증
            </button>
          </div>
          <div className={styles.emailBox}>
            <input
              placeholder="이메일 인증 코드 입력"
              className={styles.input}
              value={authCode}
              onChange={(e) => setAuthCode(e.target.value)}
            />
            <button className={styles.verifyButton} onClick={handleVerifyCode}>
              확인
            </button>
          </div>

          <input
            placeholder="비밀번호"
            type="password"
            className={styles.input}
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          {/* 🔹 개인정보 방침 & 약관 동의 */}
          <div className={styles.privacyBox}>
            <label htmlFor="agree" className={styles.notice}>
              저희 서비스를 이용하는 사람은{" "}
              <button type="button" onClick={() => setIsPrivacyOpen(true)}>
                개인정보 방침과 약관
              </button>
              에 동의해야 합니다.
            </label>
            <input
              type="checkbox"
              id="agree"
              checked={isAgreed}
              onChange={() => setIsAgreed(!isAgreed)}
            />
          </div>
          <button className={styles.signupButton} onClick={handleSignup}>
            가입
          </button>
        </div>

        {/* 🔹 로그인 안내 */}
        <div className={styles.loginBox}>
          <p>계정이 있으신가요 ?</p>
          <button className={styles.loginBox__loginButton} onClick={onClose}>
            로그인
          </button>
        </div>
      </div>

      {/* 🔹 개인정보 처리방침 모달 */}
      {isPrivacyOpen && (
        <div className={styles.overlay}>
          <div className={styles.modal}>
            <h2>개인정보 처리방침</h2>
            <p>
              Stacks는 사용자의 개인정보를 안전하게 보호하며, 사용자의 동의 없이
              외부에 공유하지 않습니다.
            </p>
            <p>더 자세한 내용은 공식 웹사이트에서 확인할 수 있습니다.</p>
            <button onClick={() => setIsPrivacyOpen(false)}>닫기</button>
          </div>
        </div>
      )}
    </div>
  );
}

export default Index;
