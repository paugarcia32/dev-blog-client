import React from "react";
import CommentCard from "./CommentCard";

const CommentList = ({ comments }) => (
  <div className="comments-section">
    <h2 className="CommentTitle">Comments</h2>
    {comments.map((comment) => (
      <CommentCard key={comment._id} comment={comment} />
    ))}
  </div>
);

export default CommentList;
