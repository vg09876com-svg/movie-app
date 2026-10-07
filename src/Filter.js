import React from "react";

function Filter({
  searchTitle,
  setSearchTitle,
  searchRating,
  setSearchRating,
}) {
  return (
    <div style={{ marginBottom: "30px" }}>
      <h2>Filter Movies</h2>

      <input
        type="text"
        placeholder="Search by title"
        value={searchTitle}
        onChange={(e) => setSearchTitle(e.target.value)}
      />

      <input
        type="number"
        placeholder="Minimum rating"
        min="0"
        max="10"
        step="0.1"
        value={searchRating}
        onChange={(e) => setSearchRating(e.target.value)}
        style={{ marginLeft: "10px" }}
      />
    </div>
  );
}

export default Filter;