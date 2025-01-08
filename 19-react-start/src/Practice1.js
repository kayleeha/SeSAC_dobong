export default function Practice1() {
  const name = "로이";
  const animal = "강아지";
  const a = 20;
  const b = 10;
  let isShow;
  if (a > b) {
    isShow = true;
  } else {
    isShow = false;
  }

  return (
    <div>
      <h2>제 반려 동물의 이름은 {name}입니다.</h2>
      <h2>
        {name}는 {animal}입니다.
      </h2>
      <div>{3 + 5 === 8 ? "정답입니다!" : "오답입니다!"}</div>
      <div>{isShow && "a가 b보다 큽니다."}</div>
    </div>
  );
}
