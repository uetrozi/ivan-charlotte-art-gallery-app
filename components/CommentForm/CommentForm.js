export default function CommentForm({ slug, onSubmitComment }) {
  function handleSubmit(event) {
    event.preventDefault();
    const comment = document.getElementById("Add-Comment").value;
    onSubmitComment(slug, comment);
  }

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="Add-Comment">Write a comment:</label>
      <input
        type="text"
        id="Add-Comment"
        placeholder="Write a comment"
        name="comment"
      ></input>
      <button type="submit">Send</button>
    </form>
  );
}
