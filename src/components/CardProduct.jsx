import { useState } from "react";
import Celular from "../assets/categorias/celular.jpg";
import AddCartIcon from "../icons/AddCartIcon";
import WhatsAppIcon from "../icons/WhatsAppIcon";

const CardProduct = () => {
  // Estado para manejar el color del corazón
  const [isLiked, setIsLiked] = useState(false);

  // Función para alternar el color del corazón
  const toggleLike = () => {
    setIsLiked(!isLiked);
  };

  return (
    <div className="text-center border-r border-b rounded-lg p-1">
      <div>
        <img src={Celular} alt="Celular" />
      </div>
      <h1 className="text-xl text-BlueMain">Samsung A90</h1>
      <p className="text-sm my-2">
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ut, odit.
      </p>
      <div className="flex items-center justify-between my-4">
        <p className="font-bold text-2xl">S/ 99.00</p>

        {/* Corazón que cambia de color */}
        <button onClick={toggleLike} className={`text-3xl`}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill={`${isLiked ? "#FF0000" : "#ffff"}`}
            width="30"
            height="30"
            strokeWidth="2"
            strokeLinejoin="round"
            strokeLinecap="round"
            stroke={`${isLiked ? "#FF0000" : "currentColor"}`}
          >
            <path d="M19.5 12.572l-7.5 7.428l-7.5 -7.428a5 5 0 1 1 7.5 -6.566a5 5 0 1 1 7.5 6.572"></path>
          </svg>
        </button>
      </div>
      <button className="border-BlueMain border-2 text-BlueMain w-full justify-center py-2 flex items-center gap-x-1 rounded-lg hover:bg-gray-100">
        <AddCartIcon />
        <span>Añadir al carrito</span>
      </button>
      <a
        href=""
        className=" bg-green-500 text-white flex items-center justify-center gap-x-2 py-2 rounded-lg mt-2 uppercase hover:bg-green-600"
      >
        <WhatsAppIcon />
        Comprar
      </a>
    </div>
  );
};

export default CardProduct;
