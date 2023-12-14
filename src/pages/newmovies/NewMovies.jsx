// import "./NewMovies.css";
import { useState, useEffect } from "react";
import { getNewMovies } from "../../services/apiCalls";
// import { Link } from "react-router-dom";
import MovieCard from "../../common/MovieCard/moviecard";

export const NewMovies = ({ setVarMovie }) => {
  const [newMovies, setNewMovies] = useState([]);

  useEffect(() => {
    const fetchNewMovies = async () => {
      try {
        const movies = await getNewMovies();
        setNewMovies(movies);
        setVarMovie(movies);
      } catch (error) {
        console.error("Error fetching new movies:", error);
      }
    };

    fetchNewMovies();
  }, []);
  return (
    <div className="newmoviesDesign">
      <ul>
        {newMovies &&
          newMovies.map((movie) => <MovieCard key={movie.id} movie={movie} />)}
      </ul>
    </div>
  );
};
