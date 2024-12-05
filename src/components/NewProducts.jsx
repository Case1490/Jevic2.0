import CardProduct from "./CardProduct";


const NewProducts = () => {
  return (
    <div className="w-[80%] m-auto my-10">
      <h1 className="text-4xl mb-2">Últimas Novedades</h1>
      <hr />

      <div className="flex my-8">
        <CardProduct />
        <CardProduct />
        <CardProduct />
        <CardProduct />
      </div>
    </div>
  );
}

export default NewProducts