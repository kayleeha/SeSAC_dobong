export default function Select({ setData }) {
  // {
  //   fruit: "apple",
  //   background: "white",
  //   color: "black",
  //   content: "text",
  // }
  return (
    <div>
      {/* select 3개 */}
      과일 :{" "}
      <select
        onChange={(e) => {
          // console.log("target", e.target);
          // console.log("currentTarget", e.currentTarget);
          // console.log("currentTarget", e.target.value);
          setData((prevState) => {
            return { ...prevState, fruit: e.target.value };
          });
        }}
      >
        <option value="apple">사과</option>
        <option value="grape">포도</option>
        <option value="peach">복숭아</option>
        <option value="banana">바나나</option>
      </select>
      배경색 :{" "}
      <select
        onChange={(e) => {
          setData((prevState) => {
            return { ...prevState, background: e.target.value };
          });
        }}
      >
        <option value="black">검정</option>
        <option value="white">흰색</option>
        <option value="red">빨강</option>
        <option value="yellow">노랑</option>
        <option value="pink">분홍</option>
        <option value="blue">파랑</option>
        <option value="green">초록</option>
        <option value="purple">보라</option>
      </select>
      글자색 :{" "}
      <select
        onChange={(e) => {
          setData((prevState) => {
            return { ...prevState, color: e.target.value };
          });
        }}
      >
        <option value="black">검정</option>
        <option value="white">흰색</option>
        <option value="red">빨강</option>
        <option value="yellow">노랑</option>
        <option value="pink">분홍</option>
        <option value="blue">파랑</option>
        <option value="green">초록</option>
        <option value="purple">보라</option>
      </select>
    </div>
  );
}
