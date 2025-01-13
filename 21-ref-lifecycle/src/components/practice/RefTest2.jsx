import { useState, useRef } from "react";

const RefTest2 = () => {
  const binRef = useRef();
  const [input, setInput] = useState("");
  const [color, setColor] = useState("white");

  const onClickButton = () => {
    setColor(binRef.current.value);
    setInput("");
    binRef.current.focus();
  };

  return (
    <div style={{ backgroundColor: color, width: "200px", height: "100px" }}>
      <input
        ref={binRef}
        value={input}
        type="text"
        onChange={(e) => setInput(e.target.value)}
      />
      <button onClick={onClickButton}>색 적용</button>
    </div>
  );
};

export default RefTest2;
