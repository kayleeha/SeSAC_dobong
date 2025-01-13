import { useEffect, useState } from "react";

const MyComponent = ({ number }) => {
  const [text, setText] = useState("");
  /* 
       useEffect(effect[, deps])
        - effect : 콜백 함수
        - deps (의존성 배열) : 의존성 배열에 있는 데이터가 변하면 콜백 함수 실행
         - [] : Mount 되었을 때만 동작
         - 생략 : Mount, Update 시 언제나 동작
         - [data] : Mount, 'data'가 Update 되었을 때 동작
    */

  // Mount 시점에 실행
  useEffect(() => {
    console.log("함수형 컴포넌트 Mount!! 👌");
  }, []);

  // Unmount 시점에 실행 + (mount 시점에 실행)
  useEffect(() => {
    // Mount 되었을 때
    return () => {
      console.log("함수형 컴포넌트 Unmount!! 😣");
    };
  }, []);

  // Update 시점에 실행 + (mount 시점에 실행)
  useEffect(() => {
    // text, number state가 바뀔 때 모두 실행됨
    console.log("함수형 컴포넌트 Update 될 때마다!! 😘 ");
  });

  // 특정 state Update + (mount 시점에 실행)
  useEffect(() => {
    console.log("text state 변경 시 🤣");
  }, [text]);

  return (
    <>
      <p>MyComponent : {number}</p>
      <input
        type="text"
        onChange={(e) => setText(e.target.value)}
        value={text}
      />
    </>
  );
};

export const LifecycleFunc = () => {
  const [number, setNumber] = useState(0);
  const [visible, setVisible] = useState(true);

  const changeNumber = () => {
    setNumber(number + 1);
  };

  const changeVisible = () => {
    setVisible(!visible);
  };

  return (
    <>
      <button onClick={changeNumber}>+</button>
      <button onClick={changeVisible}>On/Off</button>
      {visible && <MyComponent number={number} />}
    </>
  );
};
