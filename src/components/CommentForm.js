import React from "react";

const CommentForm = ({
  newCommentData,
  handleInputChange,
  handleCommentSubmit,
}) => (
  <form className="comment-form" onSubmit={handleCommentSubmit}>
    <input
      type="text"
      name="autor"
      placeholder="Your name"
      value={newCommentData.autor}
      onChange={handleInputChange}
      required
    />
    <textarea
      name="contenido"
      placeholder="Write your comment here"
      value={newCommentData.contenido}
      onChange={handleInputChange}
      required
    />
    <button type="submit">Send comment</button>
  </form>
);

export default CommentForm;
