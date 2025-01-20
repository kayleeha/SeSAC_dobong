import React from "react";
import ReactDOM from "react-dom/client";
import { configureStore } from "@reduxjs/toolkit";
import { Provider } from "react-redux";
import App from "./App";
import rootReducer from "./store";

const root = ReactDOM.createRoot(document.getElementById("root"));

// redux 사용
// 할 일 1. src/store/module 개별적인 전역 state 선언
// -> reducer 생성
// 할 일 2. src/store/index.js,
// store/module에서 만들어준 여러 개의 reducer를 통합
// 할 일 2-2. 내보내기
// src/index.js에서 쓰일 예정

// 할 일 3. store 설정
// module/index.js에서 통합한 rootReducer를 value로 전달
const store = configureStore({ reducer: rootReducer });

// state의 초기 값은 매개변수의 default 값으로 설정
// function reducer(numberState = 1, action) {
//   console.log(action);
//   if (action.type === "증가") {
//     return numberState + 1;
//   } else if (action.type === "감소") {
//     return numberState - 1;
//   } else {
//     return numberState;
//   }
// }

// 할 일 4. App 컴포넌트 자식 컴포넌트에서 사용 가능하도록
// store props로 store 전달
root.render(
  <Provider store={store}>
    <App />
  </Provider>
);
