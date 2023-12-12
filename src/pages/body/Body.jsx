import React, { useState } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import { Home } from "../home/Home";
import { Movies } from "../movies/Movies";
import { NewMovies } from "../newmovies/NewMovies";
import { TopMovies } from "../topmovies/TopMovies";
import { Search } from "../search/Search";
import { Movie } from "../movie/Movie";
import { Register } from "../register/Register";
import { Login } from "../login/Login";

export const Body = () => {
  const [varMovie, setVarMovie] = useState([]);
  const [loggedIn, setLoggedIn] = useState(false);

  return (
    <>
      <Routes>
        <Route path="*" element={<Navigate to={"/"} />} />
        <Route path="/" element={<Home />} />
        <Route
          path="/movies"
          element={<Movies setVarMovie={setVarMovie} loggedIn={loggedIn} />}
        />
        <Route
          path="/newmovies"
          element={<NewMovies setVarMovie={setVarMovie} loggedIn={loggedIn} />}
        />
        <Route
          path="/topmovies"
          element={<TopMovies setVarMovie={setVarMovie} loggedIn={loggedIn} />}
        />
        <Route
          path="/search"
          element={<Search setVarMovie={setVarMovie} loggedIn={loggedIn} />}
        />
        <Route
          path="/movie/:id"
          element={<Movie varMovie={varMovie} loggedIn={loggedIn} />}
        />
        <Route path="/login" element={<Login setLoggedIn={setLoggedIn} />} />
        <Route
          path="/register"
          element={<Register setLoggedIn={setLoggedIn} />}
        />
      </Routes>
    </>
  );
};
// import { Routes, Route, Navigate } from "react-router-dom";
// import { useState } from "react";
// import { Home } from "../home/Home";
// import { Movies } from "../movies/Movies";
// import { NewMovies } from "../newmovies/NewMovies";
// import { TopMovies } from "../topmovies/TopMovies";
// import { Search } from "../search/Search";
// import { Movie } from "../movie/Movie";
// import { Login } from "../login/Login";
// import { Register } from "../register/Register";

// export const Body = () => {
//   const [varMovie, setVarMovie] = useState([]);

//   return (
//     <>
//       <Routes>
//         <Route path="*" element={<Navigate to={"/"} />} />
//         <Route path="/" element={<Home />} />
//         <Route path="/movies" element={<Movies setVarMovie={setVarMovie} />} />
//         <Route
//           path="/newmovies"
//           element={<NewMovies setVarMovie={setVarMovie} />}
//         />
//         <Route
//           path="/topmovies"
//           element={<TopMovies setVarMovie={setVarMovie} />}
//         />
//         <Route path="/search" element={<Search setVarMovie={setVarMovie} />} />
//         <Route path="/movie/:id" element={<Movie varMovie={varMovie} />} />
//         <Route path="/login" element={<Login />} />
//         <Route path="/register" element={<Register />} />
//       </Routes>
//     </>
//   );
// };
