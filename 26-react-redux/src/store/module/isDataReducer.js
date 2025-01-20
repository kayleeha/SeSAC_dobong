const initialState = false;

export const isDataReducer = (state = initialState, action) => {
  console.log("isData action", action); // { type: "isData/CHANGE" }
  if (action.type === "isData/CHANGE") return !state;
  return state; // 기존 state 유지
};
