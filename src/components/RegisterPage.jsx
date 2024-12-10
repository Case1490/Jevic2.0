import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { auth } from "../firebaseConfig";
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import Swal from "sweetalert2";

import Logo from "../assets/Logo_dark-removebg-preview.png";

const RegisterPage = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [name, setName] = useState(""); // Estado para el nombre
  const [email, setEmail] = useState(""); // Estado para el correo
  const [password, setPassword] = useState(""); // Estado para la contraseña
  const [confirmPassword, setConfirmPassword] = useState(""); // Estado para confirmar contraseña
  const navigate = useNavigate();

  const handleRegister = async (e) => {
    e.preventDefault();

    // Validación de contraseñas
    if (password !== confirmPassword) {
      Swal.fire("Error", "Las contraseñas no coinciden", "error");
      return;
    }

    try {
      // Crear usuario con correo y contraseña
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );

      // Actualizar el perfil del usuario con el nombre
      await updateProfile(userCredential.user, {
        displayName: name,
      });

      // SweetAlert de éxito
      Swal.fire({
        icon: "success",
        title: "Registro exitoso",
        text: "Tu cuenta ha sido creada",
        confirmButtonText: "OK",
      }).then(() => {
        navigate("/iniciar-sesion"); // Redirigir al iniciar sesión
      });
    } catch (error) {
      if (error.code === "auth/email-already-in-use") {
        // Correo ya registrado
        Swal.fire({
          icon: "error",
          title: "Correo ya registrado",
          text: "Este correo ya está en uso. Por favor, prueba con otro.",
          confirmButtonText: "Entendido",
        });
      } else {
        // Manejo de otros errores
        Swal.fire({
          icon: "error",
          title: "Error",
          text: "Ocurrió un error al registrar tu cuenta. Intenta nuevamente.",
          confirmButtonText: "Cerrar",
        });
        console.error("Error al registrar el usuario:", error.message);
      }
    }
  };

  return (
    <div className="min-h-screen items-start pt-4 pb-4 lg:h-screen flex lg:items-center justify-center bg-slate-100">
      <div className="flex flex-col lg:flex-row h-[90%] lg:h-[470px] w-[90%] max-w-[900px] mb-4 shadow-xl rounded-br-3xl rounded-bl-3xl">
        <div className="registerBackground">
          <div className="text-white w-[90%] text-center">
            <div className="w-[90px] m-auto lg:w-[180px] mb-2 lg:mb-6">
              <img src={Logo} alt="Logo" />
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
            <form onSubmit={handleRegister}>
              <div className="flex flex-col gap-y-2 lg:flex-row items-center gap-x-2">
                <input
                  type="text"
                  placeholder="Nombres"
                  required
                  className="flex-1 w-full"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
              </div>

              <input
                type="email"
                placeholder="Correo Electrónico"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <div className="relative">
                <input
                  type={showPassword ? "text" : "password"}
                  placeholder="Contraseña"
                  required
                  className="w-full"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
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
                  required
                  className="w-full"
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                />
                <button
                  type="button"
                  onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                  className="absolute right-2 top-2 text-sm text-BlueLight"
                >
                  {showConfirmPassword ? "Ocultar" : "Mostrar"}
                </button>
              </div>
              <button type="submit" className="btn_register">
                Registrar
              </button>
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
