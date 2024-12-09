import { useState } from "react";
import { Link } from "react-router-dom";
import Logo from "../assets/Logo_dark-removebg-preview.png";

const RegisterPage = () => {
  // Estados separados para cada campo
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  return (
    <div className="min-h-screen items-start pt-4 pb-4 lg:h-screen flex lg:items-center justify-center bg-slate-100">
      <div className="flex flex-col lg:flex-row h-[90%] lg:h-[470px] w-[90%] max-w-[900px] mb-4 shadow-xl rounded-br-3xl rounded-bl-3xl">
        <div className="registerBackground">
          <div className="text-white w-[90%] text-center">
            <div className="w-[90px] m-auto lg:w-[180px] mb-2 lg:mb-6">
              <img src={Logo} alt="" />
            </div>
            <p className="font-bold">
              Regístrate y disfruta de beneficios exclusivos, actualizaciones
              personalizadas y mucho más. ¡Te esperamos!
            </p>
          </div>
        </div>

        <div className="register">
          <div className="loginRegister">
            <div className="haderRegister">
              <span>Regístrate ahora</span>
            </div>
            <form action="#">
              <div className="flex flex-col gap-y-2 lg:flex-row items-center gap-x-2">
                <input
                  type="text"
                  placeholder="Nombres"
                  required=""
                  className="flex-1 w-full"
                />
                <input
                  type="text"
                  placeholder="Apellidos"
                  required=""
                  className="flex-1 w-full"
                />
              </div>

              <input
                type="email"
                placeholder="Correo Electrónico"
                required=""
              />
              <div className="relative">
                <input
                  type={showPassword ? "text" : "password"}
                  placeholder="Contraseña"
                  required=""
                  className="w-full"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-2 top-2 text-sm text-BlueLight"
                >
                  {showPassword ? "Ocultar" : "Mostrar"}
                </button>
              </div>
              <div className="relative">
                <input
                  type={showConfirmPassword ? "text" : "password"}
                  placeholder="Confirmar Contraseña"
                  required=""
                  className="w-full"
                />
                <button
                  type="button"
                  onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                  className="absolute right-2 top-2 text-sm text-BlueLight"
                >
                  {showConfirmPassword ? "Ocultar" : "Mostrar"}
                </button>
              </div>
              <button className="btn_register">Registrar</button>
              <span>
                ¿Ya tienes cuenta?
                <Link to="/iniciar-sesion"> Inicia Sesión aquí!</Link>
              </span>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RegisterPage;
