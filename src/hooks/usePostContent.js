import { useEffect, useState } from "react";

const usePostContent = (postId) => {
  const [postContent, setPostContent] = useState("");

  useEffect(() => {
    fetch(`${process.env.REACT_APP_URL}/post/${postId}/content`)
      .then((response) => response.text())
      .then((data) => {
        setPostContent(data);
      })
      .catch((error) => {
        console.error("Error fetching post content:", error);
      });
  }, [postId]);

  return { postContent };
};

export default usePostContent;
