import React from "react";
import ReactDOM from "react-dom/client";
import { configureStore } from "@reduxjs/toolkit";
import { Provider } from "react-redux";
import App from "./App";
import Test from "./components/Test";

const root = ReactDOM.createRoot(document.getElementById("root"));
const store = configureStore({ reducer: reducer });

// state의 초기 값은 매개변수의 default 값으로 설정
function reducer(numberState = 1, action) {
  console.log(action);
  if (action.type === "증가") {
    return numberState + 1;
  } else if (action.type === "감소") {
    return numberState - 1;
  } else {
    return numberState;
  }
}
root.render(
  <Provider store={store}>
    <App />
  </Provider>
);
