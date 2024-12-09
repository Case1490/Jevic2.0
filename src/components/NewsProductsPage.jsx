import { useEffect } from "react";
import CardProduct from "./CardProduct";

const NewsProductsPage = () => {
  // Código para que nos lleve al inicio de la página
  useEffect(() => {
    window.scrollTo(0, 0); // Desplazarse hacia el inicio
  }, []);

  return (
    <div className="pt-[140px] w-[80%] m-auto">
      <div>
        <h1 className="text-center text-4xl mb-2 font-bold my-8">
          Lo nuevo que traemos para ti
        </h1>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-2 my-8">
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

export default NewsProductsPage;
