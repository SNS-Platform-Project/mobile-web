import { useState } from "react";
import Header from "@/components/header/Header";

import styles from "./Signup.module.scss";
import { IoClose } from "react-icons/io5";

interface SignupProps {
  onClose: () => void;
}

function Signup({ onClose }: SignupProps) {
  const [isPrivacyOpen, setIsPrivacyOpen] = useState(false); // 약관 모달 상태
  const [isAgreed, setIsAgreed] = useState(false); // 체크박스 상태
  return (
    <div className={styles.overlay}>
      <div className={styles.modal}>
        <button className={styles.closeButton} onClick={onClose}>
          <IoClose />
        </button>
        <Header type="login" />

        <div>
          <h1>
            Stacks에서 자유롭게 이야기하고 소통하세요! <br />
            지금 가입하세요.
          </h1>
        </div>

        <div>
          <input placeholder="이름" className={styles.input} />
          <input placeholder="이메일" className={styles.input} />
          <input
            placeholder="비밀번호"
            type="password"
            className={styles.input}
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
          <button className={styles.signupButton}>가입</button>
        </div>

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

export default Signup;
