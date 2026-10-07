import React from "react";

function MovieCard({ movie }) {
  return (
    <div
      style={{
        border: "1px solid #ccc",
        borderRadius: "10px",
        padding: "15px",
        margin: "15px",
        width: "250px",
        display: "inline-block",
        verticalAlign: "top",
      }}
    >
      <img
        src={movie.posterURL}
        alt={movie.title}
        style={{
          width: "100%",
          height: "300px",
          objectFit: "cover",
        }}
      />

      <h2>{movie.title}</h2>

      <p>{movie.description}</p>

      <p>
        <strong>Rating:</strong> ⭐ {movie.rating}
      </p>
    </div>
  );
}

export default MovieCard;