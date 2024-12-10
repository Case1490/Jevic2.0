import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { auth } from "../firebaseConfig";
import { signInWithEmailAndPassword } from "firebase/auth";
import Swal from "sweetalert2";
import Logo from "../assets/Logo.png";

const LoginPage = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isEmailValid, setIsEmailValid] = useState(false);
  const [isPasswordValid, setIsPasswordValid] = useState(false);
  const navigate = useNavigate();

  const validateEmail = (email) => {
    // Validar formato de correo electrónico
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
  };

  const handleEmailChange = (e) => {
    const value = e.target.value;
    setEmail(value);
    setIsEmailValid(validateEmail(value)); // Actualizar estado de validación
  };

  const handlePasswordChange = (e) => {
    const value = e.target.value;
    setPassword(value);
    setIsPasswordValid(value.length >= 6); // Contraseña válida si tiene al menos 6 caracteres
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      await signInWithEmailAndPassword(auth, email, password);
      Swal.fire({
        icon: "success",
        title: "¡Inicio de sesión exitoso!",
        text: "Bienvenido de nuevo.",
      });
      navigate("/");
    } catch (err) {
      if (err.code === "auth/user-not-found") {
        Swal.fire({
          icon: "error",
          title: "Usuario no encontrado",
          text: "El correo electrónico ingresado no está registrado.",
        });
      } else if (err.code === "auth/wrong-password") {
        Swal.fire({
          icon: "error",
          title: "Contraseña incorrecta",
          text: "La contraseña ingresada no es correcta. Intenta nuevamente.",
        });
      } else {
        Swal.fire({
          icon: "error",
          title: "Error al iniciar sesión",
          text: "Ocurrió un problema. Intenta nuevamente.",
        });
      }
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-slate-100">
      <form className="formSignIn shadow-xl" onSubmit={handleLogin}>
        <p className="text-center mb-2">Bienvenido a</p>

        <div className="w-[120px] m-auto mb-2">
          <img src={Logo} alt="Logo" />
        </div>

        <h1 className="form-titleSignIn">Iniciar Sesión</h1>

        <div className="input-containerSignIn">
          <input
            type="email"
            placeholder="Correo Electrónico"
            value={email}
            onChange={handleEmailChange}
            required
            className={`${isEmailValid ? "validateInput" : ""}`}
          />
          <span></span>
        </div>
        <div className="input-containerSignIn relative">
          <input
            type={showPassword ? "text" : "password"}
            placeholder="Contraseña"
            value={password}
            onChange={handlePasswordChange}
            required
            className={`${isEmailValid ? "validateInput" : ""}`}
          />
          <button
            type="button"
            onClick={() => setShowPassword(!showPassword)}
            className="absolute right-2 top-4 text-sm text-BlueLight"
          >
            {showPassword ? "Ocultar" : "Mostrar"}
          </button>
        </div>
        <Link
          className="text-sm text-gray-600 block text-right mb-6 hover:underline"
          to="/recuperar-contrasena"
        >
          ¿Olvidaste tu contraseña?
        </Link>
        <button type="submit" className="submitSignIn">
          Ingresa
        </button>

        <div className="text-center space-y-4 mt-4">
          <div className="space-y-1">
            <p className="text-md text-gray-700">¿Cómo que no tienes cuenta?</p>
            <p>¡No esperes más!</p>
          </div>

          <Link
            to="/registrar"
            className="block bg-DarkMain text-white py-2 rounded-md mb-8 hover:bg-black"
          >
            ¡Regístrate ahora!
          </Link>
        </div>
      </form>
    </div>
  );
};

export default LoginPage;
