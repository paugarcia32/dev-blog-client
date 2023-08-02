import React from "react";
// import "./TagFilter.css";

export default function TagFilter({ tags, selectedTags, handleClearFilter, handleChange }) {
  return (
    <div className="tagFilter">
      <h3 className="tagTitle">Tags</h3>
      <div className="main-title-underline"></div>
      <select
        id="tags"
        multiple
        value={selectedTags}
        onChange={(ev) => handleChange(ev.target.options)}
        className="tagsSelect"
      >

        {tags.map((tag) => (
          <option key={tag._id} value={tag._id} className="tagOption">
            {tag.title}
          </option>
        ))}

      </select>
      <button className="filterButton" onClick={handleClearFilter}>
        Clear filter
      </button>
    </div>
  );
}
