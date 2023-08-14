import { useEffect, useState } from "react";

const useComments = (postId) => {
  const [comments, setComments] = useState([]);

  useEffect(() => {
    fetch(`${process.env.REACT_APP_URL}/post/${postId}/comments`)
      .then((response) => response.json())
      .then((data) => {
        setComments(data);
      })
      .catch((error) => {
        console.error("Error fetching comments:", error);
      });
  }, [postId]);

  return { comments, setComments };
};

export default useComments;
