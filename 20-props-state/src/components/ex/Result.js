export default function Result(props) {
  const { fruit, background, color, content } = props.data;
  //   console.log("data", data);
  return (
    <div>
      {/* 결과 화면 : img + p */}
      <img src={`/${fruit}.jpg`} width={100} height={100} />
      <p
        style={{
          backgroundColor: background,
          color: color,
          width: "100px",
          height: "50px",
          textAlign: "center",
          lineHeight: "50px",
        }}
      >
        {content}
      </p>
    </div>
  );
}
