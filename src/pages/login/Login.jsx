import React, { useState } from "react";
import "./Login.css";

export const Login = ({ setLoggedIn }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = () => {
    // Aquí debes verificar las credenciales, por ejemplo, comparando con valores predefinidos.
    // En una aplicación real, esto se haría con una llamada a un servidor o autenticación.
    const validCredentials =
      username === "usuario" && password === "contraseña";

    if (validCredentials) {
      // Si las credenciales son válidas, establecer loggedIn a true.
      setLoggedIn(true);
    } else {
      // Manejar el caso en que las credenciales no son válidas (puedes mostrar un mensaje de error).
      console.error("Credenciales incorrectas");
    }
  };

  return (
    <div className="login-container">
      <h2>Login</h2>
      <label htmlFor="username">Username:</label>
      <input
        type="text"
        id="username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
      <label htmlFor="password">Password:</label>
      <input
        type="password"
        id="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button onClick={handleLogin}>Login</button>
    </div>
  );
};
// import { useState, useEffect } from "react";
// import { CustomInput } from "../../common/CustomInput/CustomInput";
// import "./Login.css";
// import { loginMe } from "../../services/apiCalls";
// import { useNavigate } from "react-router-dom";

// export const Login = () => {
//   const navigate = useNavigate();

//   const [credentials, setCredentials] = useState({
//     username: "",
//     password: "",
//   });

//   const [mensaje, setMensaje] = useState("");
//   const [mensajeError, setMensajeError] = useState("");

//   //Funcion que vamos a pasar al hijo, vista desde aqui el padre
//   const InputHandler = (e) => {
//     //Este sistema lo vamos a utilizar cuando queramos bindear a un objeto con varias propiedades
//     setCredentials((prevState) => ({
//       ...prevState,
//       [e.target.name]: e.target.value,
//     }));
//   };

//   // useEffect(()=>{
//   //     console.log(credentials)
//   // }, [credentials])

//   const logMe = () => {
//     loginMe(credentials)
//       .then((resultado) => {
//         console.log(resultado);
//         setMensaje(
//           `Hola de nuevo ${resultado.data.firstName} ${resultado.data.lastName}...`
//         );
//         //Una vez ha venido correctamente la respuesta, enviamos al user a Home
//         setTimeout(() => {
//           navigate("/");
//         }, 2000);
//       })
//       .catch((error) => {
//         setMensajeError(error.response.data.message);
//       });
//   };

//   return (
//     <div className="loginDesign">
//       {mensaje !== "" ? (
//         <div>{mensaje}</div>
//       ) : (
//         <>
//           <CustomInput
//             type={"text"}
//             name={"username"}
//             placeholder={""}
//             design={"inputDesign"}
//             //Pasamos la función al hijo desde aqui (el padre)
//             functionChange={InputHandler}
//             functionCheck={() => {}}
//           />
//           <CustomInput
//             type={"password"}
//             name={"password"}
//             placeholder={""}
//             design={"inputDesign"}
//             functionChange={InputHandler}
//             functionCheck={() => {}}
//           />
//           <div>{mensajeError}</div>
//           <div className="buttonDesign" onClick={logMe}>
//             Log me!
//           </div>
//         </>
//       )}
//     </div>
//   );
// };
