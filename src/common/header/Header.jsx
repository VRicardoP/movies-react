import "./Header.css";
import { ButtonNav } from "../ButtonNav/ButtonNav";

export const Header = () => {
  return (
    <div className="headerDesign">
      <ButtonNav destination={"/"} name={"Home"} />

      {
        //Condicion a evaluar de la variable guardada en context o redux
        //si la condicion es true &&

        //Si quieres que login y register se escondan cuando estes logeado, esto sería una ternaria

        <>
          <ButtonNav destination={"/movies"} name={"Popular Movies"} />
          <ButtonNav destination={"/topmovies"} name={"Top Rated Movies"} />
          <ButtonNav destination={"/newmovies"} name={"New Movies"} />
          <ButtonNav destination={"/search"} name={"Search"} />
        </>
      }

      <ButtonNav destination={"/login"} name={"Login"} />
      <ButtonNav destination={"/register"} name={"Register"} />
    </div>
  );
};
