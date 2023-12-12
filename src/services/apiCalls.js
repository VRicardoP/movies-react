import axios from "axios";

const API_KEY_TMDB = "71177a5156f5b59d2b23c3d5901bf57d";
const ROOT_API_TMDB = "https://api.themoviedb.org/3/";

export const loginMe = async (body) => {
  return await axios.post(`https://dummyjson.com/auth/login`, body);
};

export const bringMovies = async (criteria) => {
  return await axios.get(
    `${ROOT_API_TMDB}search/movie?query=${criteria}&include_adult=true&language=en-US&page=1&api_key=${API_KEY_TMDB}`
  );
};

// Función para obtener películas nuevas
export const getNewMovies = async () => {
  const currentDate = new Date().toISOString().split("T")[0];
  const minDate = currentDate; // Fecha actual
  const maxDate = currentDate; // Fecha actual

  try {
    const response = await axios.get(
      `${ROOT_API_TMDB}discover/movie?include_adult=false&include_video=false&language=en-US&page=1&sort_by=popularity.desc&with_release_type=2|3&release_date.gte=${minDate}&release_date.lte=${maxDate}&api_key=${API_KEY_TMDB}`
    );

    return response.data.results;
  } catch (error) {
    console.error("Error fetching new movies:", error);
    throw error;
  }
};

// Función para obtener las películas mejor valoradas
export const getTopRatedMovies = async () => {
  try {
    const response = await axios.get(
      `${ROOT_API_TMDB}discover/movie?include_adult=false&include_video=false&language=en-US&page=1&sort_by=vote_average.desc&without_genres=99,10755&vote_count.gte=200&api_key=${API_KEY_TMDB}`
    );

    return response.data.results;
  } catch (error) {
    console.error("Error fetching top-rated movies:", error);
    throw error;
  }
};

// Función para obtener las películas más populares
export const getPopularMovies = async () => {
  try {
    const response = await axios.get(
      `${ROOT_API_TMDB}discover/movie?include_adult=false&include_video=false&language=en-US&page=1&sort_by=popularity.desc&api_key=${API_KEY_TMDB}`
    );

    return response.data.results;
  } catch (error) {
    console.error("Error fetching popular movies:", error);
    throw error;
  }
};
