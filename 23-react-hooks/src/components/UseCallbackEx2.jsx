import { useCallback, useState } from "react";

export default function UseCallbackEx2() {
  const [text, setText] = useState("");

  // 렌더링 될 때마다 다시 메모리에 저장됨
  //   const onChangeText = (e) => {
  //     setText(e.target.value);
  //   };

  // 첫 번째 렌더링이 되었을 때만 메모리에 저장됨
  const onChangeText = useCallback((e) => {
    setText(e.target.value);
  }, []);

  return (
    <div>
      <input type="text" onChange={onChangeText} />
      <p>작성한 값 : {text}</p>
    </div>
  );
}
