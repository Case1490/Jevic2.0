import { useState, useEffect } from "react";
import CardProduct from "./CardProduct";

const AllProducts = () => {
  const [selectedCategory, setSelectedCategory] = useState("Todo"); // Estado para almacenar la categoría seleccionada

  // Código para que nos lleve al inicio de la página
  useEffect(() => {
    window.scrollTo(0, 0); // Desplazarse hacia el inicio
  }, []);

  // Función para manejar el clic en los botones
  const handleCategoryClick = (category) => {
    setSelectedCategory(category); // Actualizar el estado con el valor del botón
  };

  return (
    <div className="pt-[140px] w-[80%] m-auto">
      {/* Título principal */}
      <h1 className="text-center my-8 text-4xl font-bold">
        Explora nuestros productos
      </h1>

      {/* Contenedor fijo para los NavLink */}
      <div className="flex items-center justify-center gap-4 flex-wrap">
        {[
          "Todo",
          "Celulares",
          "SmartWatch",
          "Periféricos",
          "Cargadores",
          "Audífonos",
          "CámarasIP",
        ].map((category) => (
          <button
            key={category}
            className={`navbarLinkProduct ${
              selectedCategory === category ? "activeProduct" : ""
            }`}
            onClick={() => handleCategoryClick(category)}
          >
            {category}
          </button>
        ))}
      </div>

      {/* Contenido dinámico */}
      <div className="my-8">
        <h1 className="text-center">{selectedCategory}</h1>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-2">
          <CardProduct />
          <CardProduct />
          <CardProduct />
          <CardProduct />
          <CardProduct />
          <CardProduct />
          <CardProduct />
          <CardProduct />
        </div>
      </div>
    </div>
  );
};

export default AllProducts;
