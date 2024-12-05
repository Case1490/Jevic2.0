import { Link } from "react-router-dom";
import CardProduct from "./CardProduct";

const AnyProducts = () => {
  return (
    <div className="w-[80%] m-auto relative">
      <h1 className="text-4xl mb-2">Explora Nuestros Productos</h1>
      <hr />

      <div className="grid grid-cols-4 gap-4 place-items-center my-8 opacityWhite">
        <CardProduct />
        <CardProduct />
        <CardProduct />
        <CardProduct />
        <CardProduct />
        <CardProduct />
        <CardProduct />
        <CardProduct />
      </div>

      <Link className="absolute bottom-[-20px] left-1/2 transform -translate-x-1/2 w-[120px] z-10 bg-BlueMain text-white text-center py-3 rounded-full shadow-md hover:bg-blue-900">
        Ver Todo
      </Link>
    </div>
  );
};

export default AnyProducts;
