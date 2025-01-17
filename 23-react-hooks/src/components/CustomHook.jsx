import { useState } from "react";
import useToggle from "../hooks/useToggle";

export default function CustomHook() {
  const [isOpen, setIsOpen] = useToggle();
  return (
    <>
      <h3>custom hook 사용</h3>
      <div onClick={setIsOpen}>Q. 리액트에서 custom hook을 만들 수 있나요?</div>
      {isOpen && <span>A. 네! 사용할 수 있습니다.</span>}
    </>
  );
}
