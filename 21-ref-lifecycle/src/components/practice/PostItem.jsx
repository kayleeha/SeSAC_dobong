export default function PostItem({ id, title, body }) {
  return (
    <div style={{ border: "2px solid red" }}>
      <div>
        <span>No.{id}</span>
        <span>{title}</span>
      </div>
      <p>{body}</p>
    </div>
  );
}
