import { useRef, useState } from "react";

// DOM 요소를 선택하기 위한 ref
const RefFunc1 = () => {
  // 1. ref 객체 만들기
  const inputRef = useRef();

  // 3. ref.current에 접근해서 원하는 작업 진행
  const handleFocus = () => {
    console.log(inputRef.current);
    inputRef.current.focus();
  };

  const handleDisabled = () => {
    inputRef.current.disabled = true;
  };

  return (
    <div>
      {/* 선택하고 싶은 태그에 ref 전달 */}
      <input type="text" ref={inputRef} />
      <button onClick={handleFocus}>focus</button>
      <button onClick={handleDisabled}>disabled</button>
    </div>
  );
};

// 변수처럼 사용하는 ref
const RefFunc2 = () => {
  const ref = useRef(1);
  const [state, setState] = useState(1);
  let variable = 1;

  const plusRef = () => {
    ref.current++;
    console.log("ref:", ref.current);
  };

  const plusState = () => {
    setState(state + 1);
    console.log("state:", state);
  };

  const plusVariable = () => {
    variable++;
    console.log("variable:", variable);
  };

  return (
    <div>
      <h4>{ref.current}</h4>
      <button onClick={plusRef}>Plus ref</button>
      <h4>{state}</h4>
      <button onClick={plusState}>Plus state</button>
      <h4>{variable}</h4>
      <button onClick={plusVariable}>Plus variable</button>
    </div>
  );
};

export { RefFunc1, RefFunc2 };
