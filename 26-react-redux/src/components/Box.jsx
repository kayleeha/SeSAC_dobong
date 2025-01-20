import { useDispatch, useSelector } from "react-redux";
import { countPlus, countMinus } from "../store/module/counterReducer";

export function Box1() {
  return (
    <div style={{ border: "2px dashed pink", padding: "10px" }}>
      <h4>box1입니다~!</h4>
      <Box2 />
    </div>
  );
}

export function Box2() {
  // const state = useSelector((state) => state);
  // combineReducers의 인자로 전달했던 객체의 key >> isData, count
  // console.log(state); // {isData: false, count: 1}

  // redux 사용
  // 할 일 1. src/store/module 개별적인 전역 state 선언
  // -> reducer 생성
  // 할 일 2. src/store/index.js,
  // store/module에서 만들어준 여러 개의 reducer를 통합
  // 할 일 2-2. 내보내기
  // src/index.js에서 쓰일 예정
  // 할 일 3. store 설정
  // module/index.js에서 통합한 rootReducer를 value로 전달
  // 할 일 4. App 컴포넌트 자식 컴포넌트에서 사용 가능하도록
  // store props로 store 전달

  // useSelector : store에 저장되어 있는 state 가져오기
  // useDispatch : action을 전달하기 위한 dispatch 함수 제공
  // - dispatch : action을 reducer에 전달해주는 함수!

  // 여러 개가 저장되어 있는 store에 "특정한 state"만 가지고 오는 것
  const isData = useSelector((state) => state.isData);
  const count = useSelector((state) => state.count);
  // console.log(isData, count);
  console.log("countPlus", countPlus());

  const dispatch = useDispatch();

  return (
    <div style={{ border: "2px solid skyblue", padding: "10px" }}>
      <h4>box2입니다~!</h4>
      <p>count : {count}</p>
      <p>isData : {isData.toString()}</p>
      <button onClick={() => dispatch({ type: "count/INCREMENT" })}>+1</button>
      <button onClick={() => dispatch({ type: "count/DECREMENT" })}>-1</button>
      <button onClick={() => dispatch({ type: "isData/CHANGE" })}>
        to {(!isData).toString()}
      </button>
      <br />
      <h5>action return 함수 사용</h5>
      <button onClick={() => dispatch(countPlus)}>+1</button>
      <button onClick={() => dispatch(countMinus)}>-1</button>
    </div>
  );
}
