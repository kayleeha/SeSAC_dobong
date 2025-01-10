import { useState } from "react";

export default function UserInfo() {
  const [list, setList] = useState([
    { name: "이도현", email: "test@test.com" },
  ]);
  const [nameInput, setNameInput] = useState("");
  const [emailInput, setEmailInput] = useState("");
  const addInfo = () => {
    const newInfo = list.concat({
      name: nameInput,
      email: emailInput,
    });
    setList(newInfo);
    setNameInput("");
    setEmailInput("");
  };

  // input 태그에서 엔터를 눌렀을 때 등록이 되도록~~
  const activeEnter = (e) => {
    // console.log(e.key); // 키보드 정보
    if (e.key === "Enter") {
      addInfo();
    }
  };

  const deleteInfo = (name) => {
    const newInfo = list.filter((info) => {
      return info.name !== name;
    });
    setList(newInfo);
  };

  return (
    <div>
      <input
        type="text"
        value={nameInput}
        placeholder="이름"
        onChange={(e) => {
          setNameInput(e.target.value);
        }}
        onKeyDown={activeEnter}
      />
      <input
        type="text"
        value={emailInput}
        placeholder="이메일"
        onChange={(e) => {
          setEmailInput(e.target.value);
        }}
        onKeyDown={activeEnter}
      />
      <button onClick={addInfo}>등록</button>
      <ol>
        {list.map((el) => {
          return (
            <li key={el.name} onDoubleClick={() => deleteInfo(el.name)}>
              {el.name} : {el.email}
            </li>
          );
        })}
      </ol>
    </div>
  );
}
