import { useState, useRef, useEffect } from "react";

const RefTest3 = () => {
  const binRef = useRef();
  const [num1, setNum1] = useState(0);
  const [num2, setNum2] = useState(0);
  const [op, setOp] = useState("+");
  const [input, setInput] = useState("");

  useEffect(() => {
    setNum1(Math.floor(Math.random() * 11));
    setNum2(Math.floor(Math.random() * 11));
  }, []);

  // const isPass = (answer) => {
  //   if(answer.value === ){
  //     alert("정답입니다!")
  //   } else{
  //     alert("오답입니다!")
  //   }
  // }
  return (
    <>
      <h1>실습</h1>
      <p></p>
      <input
        ref={binRef}
        type="text"
        onChange={(e) => setInput(e.target.value)}
      />
      <button onClick={() => setInput()}>정답 제출</button>
    </>
  );
};

export default RefTest3;
