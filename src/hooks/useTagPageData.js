import { useState, useEffect } from "react";

const useTagPageData = (tagId) => {
  const [tagName, setTagName] = useState("");
  const [tagPosts, setTagPosts] = useState([]);

  const fetchTagData = () => {
    fetch(`${process.env.REACT_APP_URL}/tags/${tagId}`)
      .then((response) => response.json())
      .then((tagData) => {
        setTagName(tagData.title);
      })
      .catch((error) => {
        console.error("Error fetching tag details:", error);
      });

    fetch(`${process.env.REACT_APP_URL}/posts/${tagId}`)
      .then((response) => response.json())
      .then((postsData) => {
        setTagPosts(postsData);
      })
      .catch((error) => {
        console.error("Error fetching tag posts:", error);
      });
  };

  useEffect(() => {
    fetchTagData();
  }, []);

  return {
    tagName,
    tagPosts,
    fetchTagData,
  };
};

export default useTagPageData;
