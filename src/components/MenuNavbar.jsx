import { Link, NavLink } from "react-router-dom";
import { auth } from "../firebaseConfig";
import { useState, useEffect } from "react";
import { signOut, onAuthStateChanged } from "firebase/auth";

const MenuNavbar = () => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    // Escuchar los cambios en el estado de autenticación
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser); // Actualizar el estado con el usuario actual
    });

    return () => unsubscribe(); // Limpiar el listener al desmontar el componente
  }, []);

  const handleLogout = async () => {
    try {
      await signOut(auth);
      setUser(null); // Reiniciar el estado al cerrar sesión
      window.location.reload(); // Recargar la página
    } catch (error) {
      console.error("Error al cerrar sesión:", error.message);
    }
  };

  return (
    <div className="bg-BlueMain">
      <div className="w-[80%] m-auto flex items-center justify-between text-white">
        <div>
          <ul className="flex transition-all delay-150 ease-out">
            <NavLink to="/" className="navbarLink" activeClassName="active">
              Inicio
            </NavLink>
            <NavLink
              to="/productos"
              className="navbarLink"
              activeClassName="active"
            >
              Productos
            </NavLink>
            <NavLink
              to="/novedades"
              className="navbarLink"
              activeClassName="active"
            >
              Novedades
            </NavLink>
            <NavLink
              to="/nosotros"
              className="navbarLink"
              activeClassName="active"
            >
              Nosotros
            </NavLink>
            <NavLink
              to="/contacto"
              className="navbarLink"
              activeClassName="active"
            >
              Contacto
            </NavLink>
          </ul>
        </div>

        <div>
          {user ? (
            // Mostrar nombre del usuario y botón de cerrar sesión
            <div className="flex items-center gap-x-2">
              <span>
                Hola, <strong>{user.displayName || "Usuario"}</strong>
              </span>
              <span> | </span>
              <button onClick={handleLogout} className="hover:text-CoralMain">
                Cerrar Sesión
              </button>
            </div>
          ) : (
            // Mostrar opciones de registro e inicio de sesión si no está autenticado
            <>
              <Link to="/registrar" className="hover:text-CoralMain">
                Registrar
              </Link>
              <span> | </span>
              <Link to="/iniciar-sesion" className="hover:text-CoralMain">
                Iniciar Sesión
              </Link>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default MenuNavbar;
