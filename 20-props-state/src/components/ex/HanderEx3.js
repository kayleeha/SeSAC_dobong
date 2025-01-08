import { useState } from "react";

export default function HandlerEx3({ children }) {
  const [click, setClick] = useState(true);
  const isShow = () => {
    setClick(!click);
  };
  return (
    <div>
      <button onClick={isShow}>{click ? "숨기기" : "보여주기"}</button>
      {click && <span>{children}</span>}
    </div>
  );
}
