import Header from "@/components/header/Header";

import styles from "./login.module.scss";

function Index() {
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
        <p>계정이 없으신가요?</p>
        <button className={styles.signupBox__signupButton}>가입하기</button>
      </div>
    </div>
  );
}

export default Index;
