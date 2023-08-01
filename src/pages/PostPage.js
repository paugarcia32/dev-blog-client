import { formatISO9075 } from "date-fns";
import { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { UserContext } from "../UserContext";
import TableOfContents from "../components/TOC.js";
import '../styles/PostPage.css';
import { Link } from 'react-router-dom';

export default function PostPage() {
  const { id } = useParams();
  const [postInfo, setPostInfo] = useState(null);
  const { userInfo } = useContext(UserContext);
  const [tags, setTags] = useState([]);
  const [postContent, setPostContent] = useState("");
  const [comments, setComments] = useState([]);

  // Nuevo estado para controlar los datos del formulario de comentario
  const [newCommentData, setNewCommentData] = useState({
    autor: "",
    contenido: "",
  });

  useEffect(() => {
    // Obtener los detalles del post, los tags asociados al post y los comentarios
    Promise.all([
      fetch(`${process.env.REACT_APP_URL}/post/${id}`).then((response) =>
        response.json()
      ),
      fetch(`${process.env.REACT_APP_URL}/tags`, {
        credentials: "include",
      }).then((response) => response.json()),
      fetch(`${process.env.REACT_APP_URL}/post/${id}/comments`).then((response) =>
        response.json()
      ),
    ])
      .then(([postInfo, tagsData, commentsData]) => {
        setPostInfo(postInfo);
        setTags(tagsData);

        // Verifica si los comentarios se recibieron correctamente como un array
        if (Array.isArray(commentsData)) {
          setComments(commentsData);
        } else {
          console.error("Error: Los comentarios no se recibieron como un array.");
        }

        setPostContent(postInfo.content);
      })
      .catch((error) => {
        console.error("Error fetching post, tags, and comments:", error);
      });
  }, [id]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewCommentData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleCommentSubmit = (e) => {
    e.preventDefault();
    // Enviar los datos del nuevo comentario al backend
    fetch(`${process.env.REACT_APP_URL}/post/${id}/comment`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newCommentData),
    })
      .then((response) => response.json())
      .then((data) => {
        // Actualizar el estado de comentarios con el nuevo comentario agregado
        setComments((prevComments) => [...prevComments, data]);
        // Limpiar el formulario después de enviar el comentario
        setNewCommentData({ autor: "", contenido: "" });
      })
      .catch((error) => {
        console.error("Error adding comment:", error);
      });
  };

  if (!postInfo) return null;

  return (
    <div className="post-page">
      <div className="image">
        <img src={`${process.env.REACT_APP_URL}/${postInfo.cover}`} alt="" />
      </div>
      <div className="headers">
        <h1>{postInfo.title}</h1>
        <div className="h-text">
          <time>{formatISO9075(new Date(postInfo.createdAt))}</time>
          <div className="author">
            by&nbsp;
            <Link className="author" to={'/about'}>
              {postInfo.author.username}
            </Link>
          </div>
        </div>

      </div>

      <div className="toc-content">
        <div
          className="content"
          dangerouslySetInnerHTML={{ __html: postInfo.content }}
        />
        <div className="toc-tags">
          <div className="tags">
            <strong className="related-tags">Related tags: </strong>
            <br />
            {postInfo.tag.map((associatedTag, index) => (
              <span key={associatedTag._id} className="tag">
                {associatedTag.title}
                {index !== postInfo.tag.length - 1 && ', '}
              </span>
            ))}
          </div>
          {postContent && (<TableOfContents content={postContent} />)}
        </div>
      </div>

      {/* Agregar el apartado de comentarios */}
      <div className="comments-section">
        <h2>Comentarios</h2>
        {comments.map((comment) => (
          <div key={comment._id} className="comment">
            <div className="comment-header">
              <span>{comment.autor}</span>
              <time className="comment-time">{formatISO9075(new Date(comment.fecha_comentario))}</time>
            </div>
            <div className="comment-content">{comment.contenido}</div>
          </div>
        ))}
      </div>

      {/* Agregar formulario para añadir comentario */}
      {userInfo && (
        <form className="comment-form" onSubmit={handleCommentSubmit}>
          <input
            type="text"
            name="autor"
            placeholder="Tu nombre"
            value={newCommentData.autor}
            onChange={handleInputChange}
            required
          />
          <textarea
            name="contenido"
            placeholder="Escribe tu comentario aquí"
            value={newCommentData.contenido}
            onChange={handleInputChange}
            required
          />
          <button type="submit">Enviar comentario</button>
        </form>
      )}
    </div>
  );
}
