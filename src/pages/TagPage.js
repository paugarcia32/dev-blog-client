import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import PostCard from "../components/PostCard";
import { FaTags } from "react-icons/fa";
import "../styles/TagPage.css";

export default function TagPage() {
  const { tagId } = useParams();
  const [tagName, setTagName] = useState("");
  const [tagPosts, setTagPosts] = useState([]);

  useEffect(() => {
    // Fetch tag name using the getTagCtrl or similar endpoint
    fetch(`${process.env.REACT_APP_URL}/tags/${tagId}`)
      .then((response) => response.json())
      .then((tagData) => {
        setTagName(tagData.title);
      })
      .catch((error) => {
        console.error("Error fetching tag details:", error);
      });

    // Fetch tag posts using the getPostsTagsCtrl or similar endpoint
    fetch(`${process.env.REACT_APP_URL}/posts/${tagId}`)
      .then((response) => response.json())
      .then((postsData) => {
        setTagPosts(postsData);
      })
      .catch((error) => {
        console.error("Error fetching tag posts:", error);
      });
  }, [tagId]);

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
