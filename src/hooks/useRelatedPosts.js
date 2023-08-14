import { useEffect, useState } from "react";

const useRelatedPosts = (postId) => {
  const [relatedPosts, setRelatedPosts] = useState([]);

  useEffect(() => {
    fetch(`${process.env.REACT_APP_URL}/post/${postId}/related`)
      .then((response) => response.json())
      .then((data) => {
        setRelatedPosts(data);
      })
      .catch((error) => {
        console.error("Error fetching related posts:", error);
      });
  }, [postId]);

  return { relatedPosts };
};

export default useRelatedPosts;
