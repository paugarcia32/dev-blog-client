import React from "react";

export default function TagFilter({ tags, selectedTags, handleClearFilter, handleChange }) {
  return (
    <div className="tagFilter">
      <h3 className="TagTitle">Tags</h3>
      <select
        id="tags"
        multiple
        value={selectedTags}
        onChange={(ev) => handleChange(ev.target.options)}
      >
        {tags.map((tag) => (
          <option key={tag._id} value={tag._id} className="tags">
            {tag.title}
          </option>
        ))}
      </select>
      <button className="filter" onClick={handleClearFilter}>
        Clear filter
      </button>
    </div>
  );
}
