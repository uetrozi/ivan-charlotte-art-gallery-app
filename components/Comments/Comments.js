import { Fragment } from "react";

export default function Comments({ comments }) {
  return (
    <>
      <h1>Comments</h1>
      <ul>
        {comments?.map((comment) => (
          <li key={comment.timestamp}>
            {comment.value} date={comment.date} time={comment.time}
          </li>
        ))}
      </ul>
    </>
  );
}
