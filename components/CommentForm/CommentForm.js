export default function CommentForm({ onSubmitComment }) {
  return (
    <form>
      <label htmlFor="Add-Comment">Write a comment:</label>
      <input
        type="text"
        id="Add-Comment"
        onSubmit={onSubmitComment}
        placeholder="Write a comment"
      ></input>
      <button type="submit">Send</button>
    </form>
  );
}
