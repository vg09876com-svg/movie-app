import React from "react";
import MovieCard from "./MovieCard";

function MovieList({ movies }) {
  return (
    <div>
      <h2>Movies</h2>

      {movies.length === 0 ? (
        <p>No movies found.</p>
      ) : (
        movies.map((movie, index) => (
          <MovieCard key={index} movie={movie} />
        ))
      )}
    </div>
  );
}

export default MovieList;