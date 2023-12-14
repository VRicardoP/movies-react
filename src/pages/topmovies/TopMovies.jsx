// import "./TopMovies.css";
import React, { useState, useEffect } from "react";
import { getTopRatedMovies } from "../../services/apiCalls";
// import { Link } from "react-router-dom";
import MovieCard from "../../common/MovieCard/moviecard";

export const TopMovies = ({ setVarMovie }) => {
  const [topRatedMovies, setTopRatedMovies] = useState([]);

  useEffect(() => {
    const fetchTopRatedMovies = async () => {
      try {
        const movies = await getTopRatedMovies();
        setTopRatedMovies(movies);
        setVarMovie(movies);
      } catch (error) {
        console.error("Error fetching top-rated movies:", error);
      }
    };

    fetchTopRatedMovies();
  }, []);
  return (
    <div className="topmoviesDesign">
      <ul>
        {topRatedMovies &&
          topRatedMovies.map((movie) => (
            <MovieCard key={movie.id} movie={movie} />
          ))}
      </ul>
    </div>
  );
};
