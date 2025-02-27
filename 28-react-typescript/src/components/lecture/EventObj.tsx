import React from "react";

export default function EventObj() {
  function handleClick(e: React.MouseEvent<HTMLDivElement>) {
    console.log(e);
    console.log(e.target);
  }
  function handleChange(event: React.ChangeEvent<HTMLInputElement>) {
    console.log(event);
    console.log(event.target.value);
  }
  function handleKeyDown(a: React.KeyboardEvent<HTMLInputElement>) {
    console.log(a.key);
    console.log(a.code);
  }

  return (
    <div style={{ backgroundColor: "yellow" }}>
      {/* onClick 내에서 event 전달 받을 때는 이벤트 타입 작성하지 않아도 됨 */}
      <div onClick={(e) => console.log(e)}>onClick</div>
      <div onClick={handleClick}>onClick</div>
      <div>
        <span>onChange</span>
        <input type="text" onChange={handleChange} />
      </div>
      <div>
        <span>onKeyDown</span>
        <input type="text" onKeyDown={handleKeyDown} />
      </div>
      <div onDrag={handleClick}>onDrag</div>
    </div>
  );
}
