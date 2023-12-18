import { Fragment } from "react";

export default function Comments({ comments }) {
  return (
    <ul>
      {comments.map((comment) => (
        <Fragment key={comment.time}>
          <li date={comment.date} time={comment.time}>
            {comment.value}
          </li>
        </Fragment>
      ))}
    </ul>
  );
}
