// action type의 상수
// const DEPOSIT = "bank/DEPOSIT";
// const WITHDRAW = "bank/WITHDRAW";

// export const deposit = (payload) => ({
//   type: DEPOSIT,
//   payload: payload,
// });
// export const withdraw = (payload) => ({ type: WITHDRAW, payload });

// const initialState = 0;

// export const bankReducer = (state = initialState, action) => {
//   switch (action.type) {
//     case DEPOSIT:
//       return state + action.payload;
//     case WITHDRAW:
//       return state - action.payload;
//     default:
//       return state;
//   }
// };

export const bankReducer = (prevState = 0, action) => {
  switch (action.type) {
    case "deposit":
      return prevState + action.payload;
    case "withdraw":
      return prevState - action.payload;
    default:
      return prevState;
  }
};
