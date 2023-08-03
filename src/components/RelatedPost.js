import React from 'react';
import { formatISO9075, format } from 'date-fns';
import { Link } from 'react-router-dom'; // Import the Link component
import '../styles/RelatedPost.css';

const RelatedPost = ({ post }) => {
  return (
    <div className="related-post">
      <div className="image2">
        <Link to={`/post/${post._id}`}>
          <img src={`${process.env.REACT_APP_URL}/${post.cover}`} alt="" />
        </Link>
      </div>
      <div className="related-post-content">
        <Link to={`/post/${post._id}`}>
          <h3>{post.title}</h3>
        </Link>
        <Link to={`/post/${post._id}`} className="author">
        {post.author.username}
        </Link>
        <br />
        <time className="date">{format(new Date(post.createdAt), 'MMM d, yyyy')}</time>
        <div className="tags">
          {/* <strong>Tags: </strong> */}
          {post.tag.map((associatedTag, index) => (
            <span key={associatedTag._id} className="tag">
              {associatedTag.title}
              {index !== post.tag.length - 1 && ', '}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default RelatedPost;
