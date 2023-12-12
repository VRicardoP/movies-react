// import "./TopMovies.css";
import React, { useState, useEffect } from "react";
import { getTopRatedMovies } from "../../services/apiCalls";
import { Link } from "react-router-dom";

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
            <Link key={movie.id} to={`/movie/${movie.id}`}>
              <div key={movie.id} className="gridItem">
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
          ))}
      </ul>
    </div>
  );
};
