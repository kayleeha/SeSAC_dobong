// redux 사용
// 할 일 1. src/store/module 개별적인 전역 state 선언
// -> reducer 생성

const initialState = 1;

// action을 return 하는 함수
export const countPlus = () => {
  return { type: "count/INCREMENT" };
};

export const countMinus = () => {
  return {
    type: "count/DECREMENT",
  };
};

export const counterReducer = (state = initialState, action) => {
  console.log("counter action", action);
  // {type: 'count/INCREMENT'}
  // {type: 'count/DECREMENT'}
  switch (action.type) {
    case "count/INCREMENT":
      return state + 1;
    case "count/DECREMENT":
      return state - 1;
    default:
      return state;
  }
};
