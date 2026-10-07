import React, { useState } from "react";
import MovieList from "./MovieList";
import Filter from "./Filter";

function App() {
  const [movies, setMovies] = useState([
    {
      title: "Avengers: Endgame",
      description: "The Avengers fight to save the universe.",
      posterURL:
        "https://image.tmdb.org/t/p/w500/or06FN3Dka5tukK1e9sl16pB3iy.jpg",
      rating: 8.4,
    },
    {
      title: "Black Panther",
      description: "T'Challa becomes the king of Wakanda.",
      posterURL:
        "https://image.tmdb.org/t/p/w500/uxzzxijgPIY7slzFvMotPv8wjKA.jpg",
      rating: 7.3,
    },
  ]);

  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [posterURL, setPosterURL] = useState("");
  const [rating, setRating] = useState("");

  const [searchTitle, setSearchTitle] = useState("");
  const [searchRating, setSearchRating] = useState("");

  const addMovie = (e) => {
    e.preventDefault();

    const newMovie = {
      title: title,
      description: description,
      posterURL: posterURL,
      rating: Number(rating),
    };

    setMovies([...movies, newMovie]);

    setTitle("");
    setDescription("");
    setPosterURL("");
    setRating("");
  };

  const filteredMovies = movies.filter((movie) => {
    const matchesTitle = movie.title
      .toLowerCase()
      .includes(searchTitle.toLowerCase());

    const matchesRating =
      searchRating === "" || movie.rating >= Number(searchRating);

    return matchesTitle && matchesRating;
  });

  return (
    <div style={{ padding: "30px", textAlign: "center" }}>
      <h1>My Movie App</h1>

      <Filter
        searchTitle={searchTitle}
        setSearchTitle={setSearchTitle}
        searchRating={searchRating}
        setSearchRating={setSearchRating}
      />

      <h2>Add a New Movie</h2>

      <form onSubmit={addMovie}>
        <input
          type="text"
          placeholder="Movie title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />

        <br />
        <br />

        <input
          type="text"
          placeholder="Description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />

        <br />
        <br />

        <input
          type="text"
          placeholder="Poster URL"
          value={posterURL}
          onChange={(e) => setPosterURL(e.target.value)}
        />

        <br />
        <br />

        <input
          type="number"
          placeholder="Rating"
          min="0"
          max="10"
          step="0.1"
          value={rating}
          onChange={(e) => setRating(e.target.value)}
        />

        <br />
        <br />

        <button type="submit">Add Movie</button>
      </form>

      <MovieList movies={filteredMovies} />
    </div>
  );
}

export default App;