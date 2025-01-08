import { useState } from "react";

const Counter = () => {
  const [num, setNum] = useState(0);

  const increase = () => {
    setNum(num + 1);
  };

  const alertMsg = (msg) => {
    alert(`${msg}~~ 현재 number state는 ${num}입니다!`);
  };

  const consoleMsg = (e, msg) => {
    console.log(`${msg}~~ 현재 number state는 ${num}입니다!`);
    console.log(e.target);
  };

  const handleClick = (e) => {
    console.log("=============");
    console.log(e.target); // span, 실제로 눌리고 있는 것
    console.log(e.currentTarget); // button, 이벤트가 발생되는 곳
  };

  return (
    <div>
      <h3>number counter</h3>
      <h5>{num}</h5>
      <button onClick={increase}>더하기</button>
      <button
        onClick={(msg) => {
          alertMsg("안녕하세요");
        }}
      >
        alert 출력
      </button>
      <button
        onClick={(e) => {
          consoleMsg(e, "hello");
        }}
      >
        console 확인
      </button>
      <button onClick={handleClick}>
        <span>handleClick</span>
      </button>
    </div>
  );
};

export default Counter;
