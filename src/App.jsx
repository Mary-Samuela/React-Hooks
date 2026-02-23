import React, { useState } from "react";
import MovieList from "./components/MovieList";
import Filter from "./components/Filter";

function App() {
  const [movies, setMovies] = useState([
    {
      title: "Inception",
      description: "A mind-bending thriller by Christopher Nolan.",
      posterURL: "https://m.media-amazon.com/images/I/51s+6QwK+VL._AC_.jpg",
      rating: 5,
    },
    {
      title: "Interstellar",
      description: "Epic science fiction about space travel and love.",
      posterURL:
        "https://m.media-amazon.com/images/I/71n58uzGqTL._AC_SY679_.jpg",
      rating: 4,
    },
  ]);

  const [titleFilter, setTitleFilter] = useState("");
  const [ratingFilter, setRatingFilter] = useState(0);

  const [newMovie, setNewMovie] = useState({
    title: "",
    description: "",
    posterURL: "",
    rating: 0,
  });

  // Add new movie
  const handleAddMovie = () => {
    if (
      newMovie.title &&
      newMovie.description &&
      newMovie.posterURL &&
      newMovie.rating > 0
    ) {
      setMovies([...movies, newMovie]);
      setNewMovie({ title: "", description: "", posterURL: "", rating: 0 });
    } else {
      alert("Please fill all fields with valid values!");
    }
  };

  // Filtered movies
  const filteredMovies = movies.filter(
    (movie) =>
      movie.title.toLowerCase().includes(titleFilter.toLowerCase()) &&
      movie.rating >= ratingFilter,
  );

  return (
    <div className="p-4 text-center">
      <h1 className="text-3xl font-bold mb-6">Movie App</h1>

      {/* Filter */}
      <Filter
        titleFilter={titleFilter}
        setTitleFilter={setTitleFilter}
        ratingFilter={ratingFilter}
        setRatingFilter={setRatingFilter}
      />

      {/* Add new movie */}
      <div className="mb-6 flex flex-col items-center gap-2">
        <input
          type="text"
          placeholder="Title"
          value={newMovie.title}
          onChange={(e) => setNewMovie({ ...newMovie, title: e.target.value })}
          className="border p-2 rounded w-72"
        />
        <input
          type="text"
          placeholder="Description"
          value={newMovie.description}
          onChange={(e) =>
            setNewMovie({ ...newMovie, description: e.target.value })
          }
          className="border p-2 rounded w-72"
        />
        <input
          type="text"
          placeholder="Poster URL"
          value={newMovie.posterURL}
          onChange={(e) =>
            setNewMovie({ ...newMovie, posterURL: e.target.value })
          }
          className="border p-2 rounded w-72"
        />
        <input
          type="number"
          placeholder="Rating (0-5)"
          value={newMovie.rating}
          onChange={(e) =>
            setNewMovie({ ...newMovie, rating: Number(e.target.value) })
          }
          min="0"
          max="5"
          className="border p-2 rounded w-72"
        />
        <button
          onClick={handleAddMovie}
          className="bg-blue-500 text-white px-4 py-2 rounded mt-2"
        >
          Add Movie
        </button>
      </div>

      {/* Movie List */}
      <MovieList movies={filteredMovies} />
    </div>
  );
}

export default App;
