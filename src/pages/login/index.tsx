import Header from "@/components/header/Header";

import styles from "./login.module.scss";
import Signup from "./components/Signup";
import { useState } from "react";

function Index() {
  // [모달] 회원가입 상태
  const [isSignupOpen, setIsSignupOpen] = useState(false);

  return (
    <div className={styles.container}>
      <Header type="login" />
      <div className={styles.loginBox}>
        <input
          placeholder="사용자 이름 또는 이메일 주소"
          className={styles.loginBox__input}
        />
        <input placeholder="비밀번호" className={styles.loginBox__input} />
        <button className={styles.loginBox__logoinButton}>로그인</button>

        <div className={styles.loginBox__separator}></div>

        <button className={styles.loginBox__forgotPassword}>
          비밀번호를 잊으셨나요?
        </button>
      </div>

      <div className={styles.signupBox}>
        <p>계정이 없으신가요 ?</p>
        <button
          className={styles.signupBox__signupButton}
          onClick={() => setIsSignupOpen(true)}
        >
          가입하기
        </button>
      </div>

      {/* 회원가입 모달 (다이얼로그) */}
      {isSignupOpen && <Signup onClose={() => setIsSignupOpen(false)} />}
    </div>
  );
}

export default Index;
