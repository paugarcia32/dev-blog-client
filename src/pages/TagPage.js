import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { FaTags } from "react-icons/fa";
import PostCard from "../components/PostCard";
import useTagPageData from "../hooks/useTagPageData";
import "../styles/TagPage.css";

export default function TagPage() {
  const { tagId } = useParams();
  const { tagName, tagPosts, fetchTagData } = useTagPageData(tagId);

  useEffect(() => {
    fetchTagData();
  }, [fetchTagData]);

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
