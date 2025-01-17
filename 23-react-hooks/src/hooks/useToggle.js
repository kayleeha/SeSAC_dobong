import { useState } from "react";

export default function useToggle(initialState = false) {
  // value는 토글 상태태
  const [val, setVal] = useState(initialState);

  // value를 반대값으로 전환시키는 함수
  const toggleVal = () => setVal(!val);

  // 현재의 value 값과 반대 전환 함수를 배열에 담아서 리턴
  return [val, toggleVal];
}
