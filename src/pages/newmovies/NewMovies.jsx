// import "./NewMovies.css";
import { useState, useEffect } from "react";
import { getNewMovies } from "../../services/apiCalls";
import { Link } from "react-router-dom";

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
          newMovies.map((movie) => (
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
