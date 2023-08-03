import React, { useEffect, useContext, useState } from 'react';
import { formatISO9075 } from 'date-fns';
import { useParams, Link } from 'react-router-dom';
import { UserContext } from '../UserContext';
import TableOfContents from '../components/TOC';
import RelatedPost from '../components/RelatedPost';
import '../styles/PostPage.css';
import { ThemeProvider } from '../common/ThemeProvider';


export default function PostPage() {
  const { id } = useParams();
  const [postInfo, setPostInfo] = useState(null);
  const { userInfo } = useContext(UserContext);
  const [tags, setTags] = useState([]);
  const [postContent, setPostContent] = useState('');
  const [comments, setComments] = useState([]);
  const [relatedPosts, setRelatedPosts] = useState([]);
  const [newCommentData, setNewCommentData] = useState({
    autor: '',
    contenido: '',
  });

  useEffect(() => {
    Promise.all([
      fetch(`${process.env.REACT_APP_URL}/post/${id}`).then((response) => response.json()),
      fetch(`${process.env.REACT_APP_URL}/tags`, { credentials: 'include' }).then((response) => response.json()),
      fetch(`${process.env.REACT_APP_URL}/post/${id}/comments`).then((response) => response.json()),
      fetch(`${process.env.REACT_APP_URL}/post/${id}/related`).then((response) => response.json()),
    ])
      .then(([postInfo, tagsData, commentsData, relatedPostsData]) => {
        setPostInfo(postInfo);
        setTags(tagsData);
        setComments(commentsData);
        setPostContent(postInfo.content);
        setRelatedPosts(relatedPostsData);
      })
      .catch((error) => {
        console.error('Error fetching post, tags, and comments:', error);
      });
  }, [id]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewCommentData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleCommentSubmit = (e) => {
    e.preventDefault();
    fetch(`${process.env.REACT_APP_URL}/post/${id}/comment`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(newCommentData),
    })
      .then((response) => response.json())
      .then((data) => {
        setComments((prevComments) => [...prevComments, data]);
        setNewCommentData({ autor: '', contenido: '' });
      })
      .catch((error) => {
        console.error('Error adding comment:', error);
      });
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id, postInfo]);

  if (!postInfo) return null;

  return (
    <>
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
              {postContent && <TableOfContents content={postContent} />}
            </div>
            <div className="content" dangerouslySetInnerHTML={{ __html: postInfo.content }} />
        </div>
        <div>
          <h2 className='RpostTitle'>Related Posts</h2>
          <div className="related-posts-section">
            {relatedPosts.map((post) => (
            <RelatedPost key={post._id} post={post} />
            ))}
          </div>
        </div>


      <div className="comments-section">
        <h2 className='CommentTitle'>Comentarios</h2>
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
    </>
  );
}