// import "./Search.css";
import { useState, useEffect } from "react";
import { bringMovies } from "../../services/apiCalls";
import { Link } from "react-router-dom";
export const Search = ({ setVarMovie }) => {
  const [criteria, setCriteria] = useState("");
  const [peliculas, setPeliculas] = useState("");

  useEffect(() => {
    //En esta parte introduciríamos la técnica de debounce
    if (criteria !== "") {
      const debouncear = setTimeout(() => {
        bringMovies(criteria)
          .then((resultado) => {
            console.log(resultado, criteria);
            setPeliculas(resultado.data.results);
            // setVarMovie(criteria);
            setVarMovie(resultado.data.results); // Almacena las películas en setVarMovie
          })
          .catch((error) => console.log(error));
      }, 500);

      return () => clearTimeout(debouncear);
    }
  }, [criteria, setVarMovie]);
  return (
    <div className="searchDesign">
      {location.pathname === "/search" && (
        <div className="busqueda">
          <input
            className="inputDesign"
            type="text"
            name="criteria"
            placeholder="Search"
            onChange={(e) => setCriteria(e.target.value)}
          />
          <ul>
            {peliculas &&
              peliculas.map((movie) => (
                <Link key={movie.id} to={`/movie/${movie.id}`}>
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
              ))}
          </ul>
        </div>
      )}
    </div>
  );
};
