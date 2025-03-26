import { useState } from "react";

// API
import { emailVerifiactionAPI, verifyEmailCodeAPI } from "@/api/auth";
import { userNameCheckAPI } from "@/api/user";

import {
  isValidUsername,
  isValidEmail,
  isValidPassword,
} from "@/utils/validators";

import styles from "./SignupForm.module.scss";

interface SignupFormProps {
  email: string;
  setEmail: (val: string) => void;
  username: string;
  setUsername: (val: string) => void;
  password: string;
  setPassword: (val: string) => void;
  setIsEmailVerified: (val: boolean) => void;
}

function SignupForm({
  email,
  setEmail,
  username,
  setUsername,
  password,
  setPassword,
  setIsEmailVerified,
}: SignupFormProps) {
  const [authCode, setAuthCode] = useState("");
  const [usernameError, setUsernameError] = useState("");
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");

  // 유저네임 입력 유효성
  const handleUsernameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setUsername(value);
    if (!isValidUsername(value)) {
      setUsernameError("사용자 이름에는 소문자/숫자/._만 사용할 수 있습니다.");
    } else {
      setUsernameError("");
    }
  };
  // 중복 확인
  const handleUsernameCheck = async () => {
    if (!username) return;
    try {
      const res = await userNameCheckAPI(username);
      if (res === false) {
        alert("이미 사용 중인 사용자 이름입니다.");
      } else {
        alert("사용 가능한 사용자 이름입니다.");
      }
    } catch (err: any) {
      console.error("이름 중복 확인 실패", err);
      alert("사용자 이름 확인 중 오류가 발생했어요.");
    }
  };

  // 이메일 입력 유효성
  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setEmail(value);
    if (!isValidEmail(value)) {
      setEmailError("이메일 형식이 올바르지 않아요.");
    } else {
      setEmailError("");
    }
  };
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
      setIsEmailVerified(true);
    } catch (err) {
      console.error("이메일 인증 실패", err);
      alert("인증 코드가 올바르지 않아요.");
    }
  };

  // 비밀번호 유효성
  const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setPassword(value);
    if (!isValidPassword(value)) {
      setPasswordError("비밀번호는 8자 이상, 20자 이하로 입력해주세요.");
    } else {
      setPasswordError("");
    }
  };

  return (
    <div className={styles.from}>
      <div className={styles.emailBox}>
        <input
          placeholder="이름"
          className={`${styles.input} ${
            usernameError ? styles.inputError : ""
          }`}
          value={username}
          onChange={handleUsernameChange}
        />
        <button className={styles.verifyButton} onClick={handleUsernameCheck}>
          확인
        </button>
      </div>
      {usernameError && (
        <span className={styles.errorMessage}>{usernameError}</span>
      )}

      <div className={styles.emailBox}>
        <input
          placeholder="이메일"
          className={`${styles.input} ${emailError ? styles.inputError : ""}`}
          value={email}
          onChange={handleEmailChange}
        />
        <button className={styles.verifyButton} onClick={handleRequestEmail}>
          인증
        </button>
      </div>
      {emailError && <span className={styles.errorMessage}>{emailError}</span>}

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
        className={`${styles.input} ${passwordError ? styles.inputError : ""}`}
        value={password}
        onChange={handlePasswordChange}
      />
      {passwordError && (
        <span className={styles.errorMessage}>{passwordError}</span>
      )}
    </div>
  );
}

export default SignupForm;
