import { combineReducers } from "@reduxjs/toolkit";
import { isDataReducer } from "./module/isDataReducer";
import { counterReducer } from "./module/counterReducer";
import { bankReducer } from "./module/bankReducer";

// redux 사용
// 할 일 1. src/store/module 개별적인 전역 state 선언
// -> reducer 생성
// 할 일 2. src/store/index.js,
// store/module에서 만들어준 여러 개의 reducer를 통합
// 2-2. 내보내기
// src/index.js에서 쓰일 예정

// store/index.js, 여러 개의 reducer를 통합하는 역할
const rootReducer = combineReducers({
  isData: isDataReducer,
  count: counterReducer,
  bank: bankReducer,
  // 만약, 전역 관리 state가 추가되면 이 곳에도 추가
});

// 2-2. 내보내기
// src/index.js에서 쓰일 예정

export default rootReducer;
