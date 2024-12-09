import { useState } from "react";
import { Link } from "react-router-dom";
import Logo from "../assets/Logo.png";

const LoginPage = () => {
  // Estado para controlar la visibilidad de la contraseña
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="min-h-screen flex items-center justify-center bg-slate-100">
      <form className="formSignIn shadow-xl">
        <p className="text-center mb-2">Bienvenido a</p>

        <div className="w-[120px] m-auto mb-2">
          <img src={Logo} alt="Logo" />
        </div>

        <h1 className="form-titleSignIn">Iniciar Sesión</h1>

        <div className="input-containerSignIn">
          <input type="email" placeholder="Correo Electrónico" />
          <span></span>
        </div>
        <div className="input-containerSignIn relative">
          <input
            type={showPassword ? "text" : "password"}
            placeholder="Contraseña"
          />
          <button
            type="button"
            onClick={() => setShowPassword(!showPassword)}
            className="absolute right-2 top-4 text-sm text-BlueLight"
          >
            {showPassword ? "Ocultar" : "Mostrar"}
          </button>
        </div>
        <Link className="text-sm text-gray-600 block text-right mb-6 hover:underline">
          ¿Olvidaste tu contraseña?
        </Link>
        <button type="submit" className="submitSignIn">
          Ingresa
        </button>

        <div className="text-center space-y-4 mt-4">
          <div className=" space-y-1">
            <p className=" text-md text-gray-700">
              ¿Cómo que no tienes cuenta?
            </p>
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
