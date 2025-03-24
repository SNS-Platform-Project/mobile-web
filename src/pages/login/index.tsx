import { useState } from "react";

// 컴포넌트
import Header from "@/components/header/Header";
import LoginForm from "./components/login/LoginForm";
import Signup from "./components/Signup";

import styles from "./index.module.scss";

function Index() {
  // [회원가입] 모달 상태
  const [isSignupOpen, setIsSignupOpen] = useState(false);

  return (
    <div className={styles.container}>
      <Header type="login" />

      {/* 로그인 폼 */}
      <LoginForm />

      {/* 회원가입 안내 */}
      <div className={styles.signupBox}>
        <p>계정이 없으신가요 ?</p>
        <button
          className={styles.signupBox__signupButton}
          onClick={() => setIsSignupOpen(true)}
        >
          가입하기
        </button>
      </div>

      {/* 회원가입 모달 */}
      {isSignupOpen && <Signup onClose={() => setIsSignupOpen(false)} />}
    </div>
  );
}

export default Index;
