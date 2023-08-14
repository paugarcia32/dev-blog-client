import React from "react";
import { formatISO9075 } from "date-fns";

const CommentCard = ({ comment }) => (
  <div className="comment">
    <div className="comment-header">
      <span>{comment.autor}</span>
      <time className="comment-time">
        {formatISO9075(new Date(comment.fecha_comentario))}
      </time>
    </div>
    <div className="comment-content">{comment.contenido}</div>
  </div>
);

export default CommentCard;
