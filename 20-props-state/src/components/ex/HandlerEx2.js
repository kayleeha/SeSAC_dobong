import { useState } from "react";

export default function HandlerEx2() {
  const [color, setColor] = useState("검정색");
  const [textColor, setTextColor] = useState("black");
  const red = {
    color: "빨간색",
    textColor: "red",
  };

  const blue = {
    color: "파란색",
    textColor: "blue",
  };

  const changeRed = (obj) => {
    setColor(obj.color);
    setTextColor(obj.textColor);
  };
  return (
    <div>
      <p style={{ color: textColor }}>{color}</p>
      <button onClick={() => changeRed(red)}>빨간색</button>
      <button onClick={() => changeRed(blue)}>파란색</button>
    </div>
  );
}
