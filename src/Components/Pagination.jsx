import React from "react";

function Pagination({ setPage, totalPages, page }) {
  const handleNextPage = () => {
    setPage((prev) => prev + 1);
  };
  const handlePrevPage = () => {
    setPage((prev) => prev - 1);
  };
  return (
    <div className="pagination">
      <button disabled={page < 1} onClick={handlePrevPage}>
        Prev
      </button>
      <p>
        {" "}
        page {page} of {totalPages}
      </p>
      <button onClick={handleNextPage}>Next</button>
    </div>
  );
}

export default Pagination;
