import { useState } from "react";

export default function FunctionTest() {
  const [num, setNum] = useState(0);
  const increase = () => {
    setNum(num + 1);
  };
  const decrease = () => {
    setNum(num - 2);
  };
  return (
    <div>
      <p>숫자 : {num}</p>
      <button onClick={increase}>+1</button>
      <button onClick={decrease}>-2</button>
    </div>
  );
}
