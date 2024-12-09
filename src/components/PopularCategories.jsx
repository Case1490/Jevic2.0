import CardCategorie from "./CardCategorie";

// IMPORTANDO IMAGENES DE CATEGORIAS
import Celular from "../assets/categorias/celular.jpg";
import SmartWatch from "../assets/categorias/smartwatch.png";
import Perifericos from "../assets/categorias/perifericos.jpg";
import Cargadores from "../assets/categorias/cargadores.jpg";
import Audifonos from "../assets/categorias/audifonos.jpg";
import CamarasIP from "../assets/categorias/camarasip.jpg";

const PopularCategories = () => {
  return (
    <div className="w-[80%] m-auto my-4">
      <h1 className="text-center text-4xl mb-2">Categorías Populares</h1>
      <hr />
      <div className="flex items-center justify-center space-x-6 my-6">
        <CardCategorie imagen={Celular} nombre="Celulares" />
        <CardCategorie imagen={SmartWatch} nombre="SmartWatch" />
        <CardCategorie imagen={Perifericos} nombre="Periféricos" />
        <CardCategorie imagen={Cargadores} nombre="Cargadores" />
        <CardCategorie imagen={Audifonos} nombre="Audifonos" />
        <CardCategorie imagen={CamarasIP} nombre="CamarasIP" />
      </div>
    </div>
  );
};

export default PopularCategories;
