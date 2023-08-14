import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { FaTags } from "react-icons/fa";
import PostCard from "../components/PostCard";
import useTagDetails from "../hooks/useTagDetails";
import useTagPosts from "../hooks/useTagPosts";
import "../styles/TagPage.css";

export default function TagPage() {
  const { tagId } = useParams();
  const { tagName } = useTagDetails(tagId);
  const { tagPosts } = useTagPosts(tagId);

  return (
    <div className="TagPage">
      <h1>
        <FaTags className="tags-icon" /> {tagName}
      </h1>
      <div className="main-title-underline"></div>
      <div className="tagPosts">
        {tagPosts.map((post) => (
          <PostCard
            key={post._id}
            _id={post._id}
            title={post.title}
            summary={post.summary}
            cover={post.cover}
            createdAt={post.createdAt}
            author={post.author}
            tag={post.tag}
          />
        ))}
      </div>
    </div>
  );
}
