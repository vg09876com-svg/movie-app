import React from "react";
import { useLocation, useNavigate } from "react-router-dom";

function MovieDetails() {
  const location = useLocation();
  const navigate = useNavigate();

  const movie = location.state;

  return (
    <div style={{ textAlign: "center", padding: "30px" }}>
      <h1>{movie.title}</h1>

      <img
        src={movie.posterURL}
        alt={movie.title}
        style={{
          width: "300px",
          borderRadius: "10px",
        }}
      />

      <p>{movie.description}</p>

      <p>
        <strong>Rating:</strong> ⭐ {movie.rating}
      </p>

      <h2>Trailer</h2>

      <iframe
        width="560"
        height="315"
        src={movie.trailerURL}
        title={movie.title}
        allowFullScreen
      ></iframe>

      <br />
      <br />

      <button onClick={() => navigate("/")}>
        Back to Home
      </button>
    </div>
  );
}

export default MovieDetails;