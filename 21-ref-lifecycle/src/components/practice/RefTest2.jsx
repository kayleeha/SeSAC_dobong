import { useState, useRef } from "react";

const RefTest2 = () => {
  const binRef = useRef();
  const [color, setColor] = useState("white");

  const onClickButton = () => {
    setColor(binRef.current.value);
    binRef.current.value = "";
    binRef.current.focus();
  };

  return (
    <div style={{ backgroundColor: color, width: "200px", height: "100px" }}>
      <input ref={binRef} type="text" />
      <button onClick={onClickButton}>색 적용</button>
    </div>
  );
};

export default RefTest2;
