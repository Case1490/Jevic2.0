import { Link, NavLink } from "react-router-dom";

const MenuNavbar = () => {
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
          <Link to="/registrar" className=" hover:text-CoralMain">
            Registrar
          </Link>
          <span> | </span>
          <Link to="/iniciar-sesion" className=" hover:text-CoralMain">
            Iniciar Sesión
          </Link>
        </div>
      </div>
    </div>
  );
};

export default MenuNavbar;
