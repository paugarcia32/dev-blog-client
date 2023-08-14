import { useEffect, useState } from "react";

const usePostData = (id) => {
  const [postInfo, setPostInfo] = useState(null);
  const [tags, setTags] = useState([]);
  const [comments, setComments] = useState([]);
  const [postContent, setPostContent] = useState("");
  const [relatedPosts, setRelatedPosts] = useState([]);

  useEffect(() => {
    Promise.all([
      fetch(`${process.env.REACT_APP_URL}/post/${id}`).then((response) =>
        response.json()
      ),
      fetch(`${process.env.REACT_APP_URL}/tags`, {
        credentials: "include",
      }).then((response) => response.json()),
      fetch(`${process.env.REACT_APP_URL}/post/${id}/comments`).then(
        (response) => response.json()
      ),
      fetch(`${process.env.REACT_APP_URL}/post/${id}/related`).then(
        (response) => response.json()
      ),
    ])
      .then(([postInfo, tagsData, commentsData, relatedPostsData]) => {
        setPostInfo(postInfo);
        setTags(tagsData);
        setComments(commentsData);
        setPostContent(postInfo.content);
        setRelatedPosts(relatedPostsData);
      })
      .catch((error) => {
        console.error("Error fetching post, tags, and comments:", error);
      });
  }, [id]);

  return {
    postInfo,
    tags,
    comments,
    setComments,
    postContent,
    relatedPosts,
  };
};

export default usePostData;
