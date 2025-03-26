// 유저네임: 3~30자, 소문자+숫자+._ 조합, 점 연속/끝X
export const isValidUsername = (username: string): boolean => {
  const regex = /^(?!.*\.\.)(?!.*\.$)[a-z0-9._]{3,30}$/;
  return regex.test(username);
};

// 이메일: 일반적인 이메일 형식
export const isValidEmail = (email: string): boolean => {
  const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return regex.test(email);
};

// 비밀번호: 8자 이상 20자 이하
export const isValidPassword = (password: string): boolean => {
  return password.length >= 8 && password.length <= 20;
};
