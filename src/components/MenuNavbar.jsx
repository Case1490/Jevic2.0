import { Link, NavLink } from "react-router-dom";

const MenuNavbar = () => {
  return (
    <div className="bg-BlueMain">
      <div className="w-[80%] m-auto flex items-center justify-between text-white">
        <div>
          <ul className="flex transition-all delay-150 ease-out">
            <NavLink
              to="/"
              className="p-3 hover:bg-CoralMain"
              activeClassName="active"
            >
              Inicio
            </NavLink>
            <NavLink
              to="/productos"
              className="p-3 hover:bg-CoralMain"
              activeClassName="active"
            >
              Productos
            </NavLink>
            <NavLink
              to="/novedades"
              className="p-3 hover:bg-CoralMain"
              activeClassName="active"
            >
              Novedades
            </NavLink>
            <NavLink
              to="/nosotros"
              className="p-3 hover:bg-CoralMain"
              activeClassName="active"
            >
              Nosotros
            </NavLink>
            <NavLink
              to="/contacto"
              className="p-3 hover:bg-CoralMain"
              activeClassName="active"
            >
              Contacto
            </NavLink>
          </ul>
        </div>

        <div>
          <Link className=" hover:text-CoralMain">Registrar</Link>
          <span> | </span>
          <Link className=" hover:text-CoralMain">Iniciar Sesión</Link>
        </div>
      </div>
    </div>
  );
}

export default MenuNavbar