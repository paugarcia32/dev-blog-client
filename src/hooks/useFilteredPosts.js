import { useEffect, useState } from "react";

const useFilteredPosts = (postsData, selectedTags, search) => {
  const [filteredPosts, setFilteredPosts] = useState([]);

  useEffect(() => {
    const filteredPosts = postsData.filter((post) => {
      const hasSelectedTags =
        selectedTags.length === 0 ||
        selectedTags.every((selectedTag) =>
          post.tag.some((postTag) => postTag._id === selectedTag)
        );
      const hasSearchText =
        post.title.toLowerCase().includes(search.toLowerCase()) ||
        post.summary.toLowerCase().includes(search.toLowerCase());
      return hasSelectedTags && hasSearchText;
    });

    setFilteredPosts(filteredPosts);
  }, [selectedTags, postsData, search]);

  return filteredPosts;
};

export default useFilteredPosts;
