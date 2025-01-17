import { useReducer, useState } from "react";

const BANK_ACTION_TYPES = {
  deposit: "deposit",
  widthdraw: "withdraw",
};

// dispatch의 요구 사항인 action이 reducer의 두 번째 인자로 들어옴
// action = {type, payload}
const reducer = (prevState, action) => {
  console.log("dispatch 함수 호출 시, reducer 동작");
  console.log("prev", prevState);
  console.log("action", action);
  switch (action.type) {
    case BANK_ACTION_TYPES.deposit:
      return prevState + action.payload;
    case BANK_ACTION_TYPES.widthdraw:
      return prevState - action.payload;
    default:
      return prevState;
  }
};

export default function UseReducer() {
  const [number, setNumber] = useState(0);
  const [money, dispatch] = useReducer(reducer, 0);

  return (
    <>
      <h2>UseReducer 사용하기</h2>
      <p>현재 잔고 : {money}원</p>
      <input
        type="number"
        value={number}
        step={1000}
        onChange={(e) => setNumber(Number(e.target.value))}
      />
      <br />
      <button
        onClick={() =>
          dispatch({ type: BANK_ACTION_TYPES.deposit, payload: number })
        }
      >
        예금
      </button>
      <button
        onClick={() =>
          dispatch({ type: BANK_ACTION_TYPES.widthdraw, payload: number })
        }
      >
        출금
      </button>
    </>
  );
}
