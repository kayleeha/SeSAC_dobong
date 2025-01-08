import { useState } from "react";

export default function Change() {
  const [num, setNum] = useState(0);

  const increase = () => {
    setNum(num + 1);
  };

  const decrease = () => {
    setNum(num - 1);
  };
  return (
    <div>
      <p>
        {num}
        {num > 7 ? "😡" : "😊"}
      </p>
      <button onClick={increase}>1증가</button>
      <button onClick={decrease}>1감소</button>
    </div>
  );
}
