import { useState, useRef, useEffect } from "react";
import styles from "./PostTextarea.module.scss";

const users = ["한주영", "박민영", "박예진"];
const tags = ["취미", "고양이", "운동"];

function PostTextarea() {
  const [text, setText] = useState("");
  const [showDropdown, setShowDropdown] = useState(false);
  const [suggestions, setSuggestions] = useState<string[]>([]);
  const textareaRef = useRef<HTMLTextAreaElement>(null);

  // ✅ textarea 자동 높이 조절 함수
  const autoResize = () => {
    const textarea = textareaRef.current;
    if (textarea) {
      textarea.style.height = "auto"; // 초기화
      textarea.style.height = `${textarea.scrollHeight}px`; // 스크롤 높이만큼 설정
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const value = e.target.value;
    setText(value);
    autoResize();

    const match = value.match(/([@#])(\w*)$/);
    if (match) {
      const [_, symbol, word] = match;
      const list = symbol === "@" ? users : tags;
      const filtered = list.filter((item) => item.startsWith(word));
      setSuggestions(filtered);
      setShowDropdown(true);
    } else {
      setShowDropdown(false);
    }
  };

  const handleSelect = (item: string) => {
    setText((prev) =>
      prev.replace(/([@#])(\w*)$/, (_full, sym) => `${sym}${item} `)
    );
    setShowDropdown(false);

    // ✅ 선택 후 높이 재조정
    setTimeout(autoResize, 0);
  };

  // ✅ 초기 렌더링 시 한 번 실행
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
