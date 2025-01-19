import React, { useReducer, useRef, useState } from "react";

const reducer = (state, action) => {
  // (새로운 Todo 추가 로직)
  switch (action.type) {
    case "CREATE":
      return [{ id: action.id, text: action.data, isTrue: false }, ...state];
    // (Todo 완료 상태 토글 로직)
    case "TOGGLE":
      return state.map((el) =>
        el.id === action.id ? { ...el, isTrue: !el.isTrue } : el
      );
    // (Todo 삭제 로직)
    case "DELETE":
      return state.filter((el) => el.id !== action.id);
    default:
      return state;
  }
};

const TodoApp = () => {
  // 상태 관리
  const idRef = useRef(0);
  const [input, setInput] = useState("");
  const [data, dispatch] = useReducer(reducer, []);

  // 추가 이벤트 핸들러
  const onCreate = () => {
    if (input) {
      const newId = idRef.current;
      idRef.current++;

      dispatch({
        type: "CREATE",
        id: newId,
        data: input,
      });
    }
  };

  const onToggle = (id) => {
    dispatch({
      type: "TOGGLE",
      id: id,
    });
  };

  const onDelete = (id) => {
    dispatch({
      type: "DELETE",
      id: id,
    });
  };

  return (
    <div>
      <h1>Todo App</h1>
      <input
        value={input}
        placeholder="Add a new todo"
        onChange={(e) => setInput(e.target.value)}
      />
      <button onClick={onCreate}>Add</button>

      <ul>
        {data?.map((el) => {
          return (
            <div key={el.id}>
              <span
                style={{
                  textDecoration: el.isTrue ? "line-through" : "none",
                  cursor: "pointer",
                }}
                onClick={() => onToggle(el.id)}
              >
                {el.text}
              </span>
              <button onClick={() => onDelete(el.id)}>Delete</button>
            </div>
          );
        })}
      </ul>
    </div>
  );
};

export default TodoApp;
