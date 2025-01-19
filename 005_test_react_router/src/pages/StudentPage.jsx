import { useNavigate, useParams, useSearchParams } from "react-router-dom";

export default function StudentPage() {
  const nav = useNavigate();
  const { name } = useParams();
  const [searchQuery] = useSearchParams();
  const realName = searchQuery.get("name");

  return (
    <>
      <h3>
        학생의 이름은 <span style={{ color: "green" }}>{name}</span>입니다
      </h3>
      {realName && (
        <h3>
          실제 이름은 <span style={{ color: "red" }}>{realName}</span>
        </h3>
      )}
      <button onClick={() => nav(-1)}>이전 페이지로</button>
    </>
  );
}
