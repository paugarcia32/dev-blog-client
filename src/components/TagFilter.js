import React from "react";
import DropdownSelect from "react-dropdown-select";
import { FaTags } from "react-icons/fa";

export default function TagFilter({
  tags,
  selectedTags,
  handleClearFilter,
  handleChange,
}) {
  return (
    <div className="tag-filter-container">
      <DropdownSelect
        options={tags.map((tag) => ({ label: tag.title, value: tag._id }))}
        multi
        values={selectedTags}
        onChange={(values) => handleChange(values)}
        className="tag-select custom-dropdown-select"
        placeholder="Select tags"
      />
    </div>
  );
}
