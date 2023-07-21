import React, { useState } from "react";
import MovieList from "./Components/MovieList";
import "./App.css";

function App() {
  const [movies, setMovies] = useState([]);
  const [loading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  async function fetchMovieHandler() {
    setIsLoading(true);
    setError(null);

    try {
      const response = await fetch("https://swapi.dev/api/films/");

      if (!response.ok) {
        throw new Error("Something went wrong...  Retrying!!!");
      }

      const data = await response.json();
      const transformedMovies = data.results.map((movieData) => {
        return {
          id: movieData.episode_id,
          title: movieData.title,
          desc: movieData.opening_crawl,
          releaseDate: movieData.release_date,
        };
      });
      setMovies(transformedMovies);
      setIsLoading(false);
    } catch (error) {
      setError(error.message);
    }
    setIsLoading(false);
  }

  return (
    <React.Fragment>
      <section>
        <button onClick={fetchMovieHandler}>Fetch Movies</button>
      </section>
      <section>
        {!loading && movies.length > 0 && <MovieList movies={movies} />}
        {!loading && movies.length === 0 && !error && (
          <center style={{ fontSize: "2rem" }}>Found No Movies!!</center>
        )}
        {loading && <center style={{ fontSize: "2rem" }}>Loading...</center>}
        {!loading && error && (
          <center style={{ fontSize: "2rem", color: "red" }}>{error}</center>
        )}
      </section>
    </React.Fragment>
  );
}

export default App;
