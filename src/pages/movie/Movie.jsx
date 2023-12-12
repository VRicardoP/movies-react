import "./Movie.css";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

export const Movie = ({ varMovie }) => {
  const { id } = useParams();
  const [selectedMovie, setSelectedMovie] = useState(null);

  useEffect(() => {
    const foundMovie = varMovie.find((movie) => movie.id.toString() === id);

    if (foundMovie) {
      setSelectedMovie(foundMovie);
    }
  }, [id, varMovie]);

  if (!selectedMovie) {
    return <div>Loading...</div>;
  }

  const { title, genres, vote_average, release_date, overview, poster_path } =
    selectedMovie;

  return (
    <div className="movieDetail">
      <div className="movieData">
        <h2>{title}</h2>
        <p>Genres: {genres?.map((genre) => genre.name).join(", ")}</p>
        <p>Rating: {vote_average}</p>
        <p>Release Date: {release_date}</p>
        <p>Overview: {overview}</p>
      </div>
      <div className="movieImage">
        <img
          src={`https://image.tmdb.org/t/p/w500/${poster_path}`}
          alt={title}
          className="moviePoster"
        />
      </div>
    </div>
  );
};
