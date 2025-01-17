import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <div className="NotFound">
      <h2>존재하지 않는 페이지입니다!🤣</h2>
      <Link to="/">Home으로 이동</Link>
    </div>
  );
}
