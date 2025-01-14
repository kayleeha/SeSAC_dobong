import { useState, useRef, useEffect } from "react";

const RefTest3 = () => {
  const binRef = useRef();
  const [num1, setNum1] = useState(0);
  const [num2, setNum2] = useState(0);
  const op = ["+", "x", "-"];
  const [idx, setIdx] = useState(0);

  useEffect(() => {
    setNum1(Math.floor(Math.random() * 11));
    setNum2(Math.floor(Math.random() * 11));
    setIdx(Math.floor(Math.random() * 3));
  }, []);

  const isPass = () => {
    let answer;
    if (idx === 0) {
      answer = num1 + num2;
    } else if (idx === 1) {
      answer = num1 * num2;
    } else if (idx === 2) {
      answer = num1 - num2;

      Number(binRef.current.value) === answer
        ? alert("정답입니다")
        : alert("오답입니다");

      binRef.current.value = "";
      binRef.current.focus();
    }
  };

  return (
    <>
      <h1>실습</h1>
      <p>
        {num1}
        {op[idx]}
        {num2}
      </p>
      <input ref={binRef} type="text" />
      <br />
      <br />
      <button onClick={isPass}>정답 제출</button>
    </>
  );
};

export default RefTest3;
