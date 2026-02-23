import React from "react";
import { Link } from "react-router-dom";

const MovieCard = ({ title, posterURL, movieId }) => {
  return (
    <Link to={`/movie/${movieId}`}>
      <div className="border rounded p-4 w-72 m-2 shadow-lg cursor-pointer hover:scale-105 transition-transform">
        <img
          src={posterURL}
          alt={title}
          className="w-full h-64 object-cover rounded"
        />
        <h2 className="text-xl font-bold mt-2">{title}</h2>
      </div>
    </Link>
  );
};

export default MovieCard;
