import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

export default function Bank() {
  const bank = useSelector((state) => state.bank);
  const [number, setNumber] = useState(0);
  const dispatch = useDispatch();
  return (
    <>
      <div>
        <h2>코딩온 은행</h2>
        <h3>잔액 : {bank}원</h3>
        <input
          type="number"
          step={10000}
          value={number}
          onChange={(e) => setNumber(Number(e.target.value))}
        />
        <button onClick={() => dispatch({ type: "deposit", payload: number })}>
          입금
        </button>
        <button onClick={() => dispatch({ type: "withdraw", payload: number })}>
          출금
        </button>
      </div>
    </>
  );
}
