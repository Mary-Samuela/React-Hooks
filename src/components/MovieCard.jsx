import React from "react";

const MovieCard = ({ title, description, posterURL, rating }) => {
  return (
    <div className="border rounded p-4 w-72 m-2 shadow-lg">
      <img
        src={posterURL}
        alt={title}
        className="w-full h-64 object-cover rounded"
      />
      <h2 className="text-xl font-bold mt-2">{title}</h2>
      <p>{description}</p>
      <p className="font-semibold mt-1">Rating: {rating}/5</p>
    </div>
  );
};

export default MovieCard;
