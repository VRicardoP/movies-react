import "./Movies.css";
import React, { useState, useEffect } from "react";
import { getPopularMovies } from "../../services/apiCalls";
// import { Link } from "react-router-dom";
import MovieCard from "../../common/MovieCard/moviecard";

export const Movies = ({ setVarMovie }) => {
  const [popularMovies, setPopularMovies] = useState([]);

  useEffect(() => {
    const fetchPopularMovies = async () => {
      try {
        const movies = await getPopularMovies();
        setPopularMovies(movies);
        setVarMovie(movies);
      } catch (error) {
        console.error("Error fetching popular movies:", error);
      }
    };

    fetchPopularMovies();
  }, []);

  return (
    <div className="moviesDesign">
      <ul>
        {popularMovies &&
          popularMovies.map((movie) => (
            <MovieCard key={movie.id} movie={movie} />
          ))}
      </ul>
    </div>
  );
};
