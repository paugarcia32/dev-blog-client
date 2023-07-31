import React from "react";
import Form from "react-bootstrap/Form";

export default function SearchBar({ search, setSearch }) {
  return (
    <div className="searchBar">
      <Form>
        <Form.Control
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          placeholder="Search posts"
        />
      </Form>
    </div>
  );
}
