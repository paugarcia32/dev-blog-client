import React from "react";

export default function Pagination({
  currentPage,
  totalPages,
  handlePrevPage,
  handleNextPage,
}) {
  return (
    <div className="pagination">
      {currentPage > 1 && (
        <button onClick={handlePrevPage} className="paginationButton">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="paginationIcon"
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M15 15l-6-6 6-6" />
          </svg>
        </button>
      )}
      {currentPage < totalPages && (
        <button onClick={handleNextPage} className="paginationButton">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="paginationIcon"
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M9 9l6 6-6 6" />
          </svg>
        </button>
      )}
    </div>
  );
}
