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
            // <Link key={movie.id} to={`/movie/${movie.id}`}>
            //   <div className="gridItem">
            //     <img
            //       src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
            //       alt={movie.title}
            //       className="gridImage"
            //     />
            //     <div className="gridInfo">
            //       <p className="gridTitle">{movie.original_title}</p>
            //       <p className="gridDate">{movie.release_date}</p>
            //     </div>
            //   </div>
            // </Link>
          ))}
      </ul>
    </div>
  );
};
