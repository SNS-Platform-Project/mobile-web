import { useState, useRef, useEffect } from "react";
import styles from "./PostTextarea.module.scss";

// 목 데이터 (실제론 서버에서 받아오면 됨)
const users = ["한주영", "박민영", "박예진"];
const tags = ["취미", "고양이", "운동"];

function PostTextarea() {
  // 입력 텍스트 상태
  const [text, setText] = useState("");
  // 자동완성 드롭다운 관련 상태
  const [showDropdown, setShowDropdown] = useState(false);
  const [suggestions, setSuggestions] = useState<string[]>([]);
  // textarea DOM 직접 접근하기 위한 ref
  const textareaRef = useRef<HTMLTextAreaElement>(null);

  // textarea 자동 높이 조절 함수
  const autoResize = () => {
    const textarea = textareaRef.current;
    if (textarea) {
      textarea.style.height = "auto"; // 초기화
      textarea.style.height = `${textarea.scrollHeight}px`; // 스크롤 높이만큼 설정
    }
  };

  // textarea 입력 시 실행되는 함수 (#, @ 입력 시 자동완성)
  const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const value = e.target.value;
    setText(value);
    autoResize(); // 입력할 때마다 높이 자동조절
    // 마지막 단어가 @ 또는 #로 시작하는지 확인
    const match = value.match(/([@#])(\w*)$/);
    if (match) {
      const [_, symbol, word] = match;
      const list = symbol === "@" ? users : tags;
      // 마지막 단어가 @ 또는 #로 시작하는지 확인
      const filtered = list.filter((item) => item.startsWith(word));
      setSuggestions(filtered);
      setShowDropdown(true);
    } else {
      setShowDropdown(false);
    }
  };

  // 드롭다운 항목 선택 시
  const handleSelect = (item: string) => {
    const textarea = textareaRef.current;
    if (!textarea) return;

    const cursor = textarea.selectionStart;

    const before = text.slice(0, cursor);
    const after = text.slice(cursor);

    const updatedBefore = before.replace(
      /([@#])(\w*)$/,
      (_match, sym) => `${sym}${item} `
    );
    const newText = updatedBefore + after;

    setText(newText);
    setShowDropdown(false);

    // ✅ 커서 위치를 새로 이동시키기
    setTimeout(() => {
      const newCursorPos = updatedBefore.length;
      textarea.focus();
      textarea.setSelectionRange(newCursorPos, newCursorPos); // 커서 이동
      autoResize(); // 높이도 조정
    }, 0);
  };

  // 초기 렌더링 시 한 번 실행
  useEffect(() => {
    autoResize();
  }, []);

  return (
    <div className={styles.postTextarea}>
      <textarea
        ref={textareaRef}
        className={styles.postTextarea__textarea}
        placeholder="생각을 적어보세요 . . ."
        value={text}
        onChange={handleChange}
      />

      {showDropdown && (
        <ul className={styles.dropdown}>
          {suggestions.map((item) => (
            <li key={item} onClick={() => handleSelect(item)}>
              {item}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default PostTextarea;
