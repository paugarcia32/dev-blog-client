import React, { useState } from "react";
import "../styles/PostCard.css";
import "../styles/IndexPage.css";
import SearchBar from "../components/SearchBar.js";
import TagFilter from "../components/TagFilter.js";
import DisplayPosts from "../components/DisplayPosts.js";
import Pagination from "../components/Pagination.js";
import usePostsData from "../hooks/usePostsData";
import useTags from "../hooks/useTags";
import useFilteredPosts from "../hooks/useFilteredPosts";
import usePagination from "../hooks/usePagination";

export default function IndexPage() {
  const postsData = usePostsData();
  const tags = useTags();
  const [selectedTags, setSelectedTags] = useState([]);
  const [search, setSearch] = useState("");
  const filteredPosts = useFilteredPosts(postsData, selectedTags, search);
  const {
    currentPage,
    currentPosts,
    totalPages,
    handleNextPage,
    handlePrevPage,
  } = usePagination(filteredPosts, 3);

  const handleChange = (selectedList) => {
    const selectedOptions = selectedList.map((item) => item.value);
    setSelectedTags(selectedOptions);
  };

  const handleClearFilter = () => {
    setSelectedTags([]);
    setSearch("");
  };

  return (
    <div className="index-page">
      <div className="content-container">
        <SearchBar search={search} setSearch={setSearch} />
        <TagFilter
          tags={tags}
          selectedTags={selectedTags}
          handleClearFilter={handleClearFilter}
          handleChange={handleChange}
        />
        <DisplayPosts posts={currentPosts} />
        <Pagination
          currentPage={currentPage}
          totalPages={totalPages}
          handlePrevPage={handlePrevPage}
          handleNextPage={handleNextPage}
        />
      </div>
    </div>
  );
}
