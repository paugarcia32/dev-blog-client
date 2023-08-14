import { useState, useEffect } from "react";

const useTagPosts = (tagId) => {
  const [tagPosts, setTagPosts] = useState([]);

  useEffect(() => {
    fetch(`${process.env.REACT_APP_URL}/posts/${tagId}`)
      .then((response) => response.json())
      .then((postsData) => {
        setTagPosts(postsData);
      })
      .catch((error) => {
        console.error("Error fetching tag posts:", error);
      });
  }, [tagId]);

  return {
    tagPosts,
  };
};

export default useTagPosts;
