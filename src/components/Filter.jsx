import React from "react";

const Filter = ({
  titleFilter,
  setTitleFilter,
  ratingFilter,
  setRatingFilter,
}) => {
  return (
    <div className="flex justify-center gap-4 mb-6">
      <input
        type="text"
        placeholder="Filter by title"
        value={titleFilter}
        onChange={(e) => setTitleFilter(e.target.value)}
        className="border p-2 rounded"
      />
      <input
        type="number"
        placeholder="Filter by rating"
        value={ratingFilter}
        onChange={(e) => setRatingFilter(Number(e.target.value))}
        min="0"
        max="5"
        className="border p-2 rounded w-24"
      />
    </div>
  );
};

export default Filter;
