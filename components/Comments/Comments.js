export default function Comments({ comments }) {
  return (
    <>
      <h1>Comments</h1>
      <ul>
        {comments?.map((comment) => (
          <li key={comment.timestamp}>
            {comment.value}
            <p>date:{comment.date} </p>
            <p>time:{comment.time}</p>
          </li>
        ))}
      </ul>
    </>
  );
}
