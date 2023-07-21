import React from "react";
import "./MovieList.css";
import Movie from "./Movie";
import classes from "./MovieList.css";

const MovieList = (props) => {
  return (
    <ul className={classes["movies-list"]}>
      {props.movies.map((movie) => (
        <Movie
          id={movie.id}
          title={movie.title}
          releaseDate={movie.releaseDate}
          desc={movie.desc}
        />
      ))}
    </ul>
  );
};

export default MovieList;
