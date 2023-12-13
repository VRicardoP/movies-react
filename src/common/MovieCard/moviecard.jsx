import React from "react";
import { Link } from "react-router-dom";

const MovieCard = ({ movie }) => (
  <Link to={`/movie/${movie.id}`}>
    <div className="gridItem">
      <img
        src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
        alt={movie.title}
        className="gridImage"
      />
      <div className="gridInfo">
        <p className="gridTitle">{movie.original_title}</p>
        <p className="gridDate">{movie.release_date}</p>
      </div>
    </div>
  </Link>
);

export default MovieCard;
