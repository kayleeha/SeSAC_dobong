import { useRef, useState } from "react";

const RefTest1 = () => {
  const binRef = useRef();
  const [comment, setComment] = useState([
    { writer: "김주원", title: "시크릿가든" },
    { writer: "길라임", title: "시크릿가든" },
    { writer: "김주라", title: "아기" },
  ]);

  const [inputWriter, setInputWriter] = useState(""); // 작성자 등록 input
  const [inputTitle, setInputTitle] = useState(""); // 제목 등록 input

  const addComment = () => {
    let newComment = {
      writer: inputWriter,
      title: inputTitle,
    };
    setComment([...comment, newComment]);

    setInputTitle("");
    setInputWriter("");
  };

  const handleFocus = () => {
    binRef.current.focus();
  };

  const hanedleClick = () => {
    addComment();
    handleFocus();
  };

  return (
    <>
      <form>
        <label htmlFor="writer">작성자: </label>
        <input
          ref={binRef}
          type="text"
          name="writer"
          id="writer"
          value={inputWriter}
          onChange={(e) => {
            setInputWriter(e.target.value);
          }}
        />{" "}
        <label htmlFor="title">제목: </label>
        <input
          ref={binRef}
          type="text"
          name="title"
          id="title"
          value={inputTitle}
          onChange={(e) => setInputTitle(e.target.value)}
        />{" "}
        <button type="button" onClick={hanedleClick}>
          작성
        </button>
      </form>
      <table border={1} style={{ margin: "30px auto", width: "500px" }}>
        <thead>
          <tr>
            <th>번호</th>
            <th>제목</th>
            <th>작성자</th>
          </tr>
        </thead>
        <tbody>
          {comment.map((value, idx) => {
            return (
              <tr key={idx + 1}>
                <td>{idx + 1}</td>
                <td>{value.title}</td>
                <td>{value.writer}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </>
  );
};

export default RefTest1;
