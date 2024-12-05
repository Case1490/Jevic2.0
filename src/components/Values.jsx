
import CardValue from "./CardValue";


const Values = () => {
  return (
    <div className="my-8">
      <h1 className="text-center my-4 text-4xl font-bold">Nuestros Valores</h1>

      <div className="grid grid-cols-2 gap-2">
        <CardValue />
        <CardValue />
        <CardValue />
        <CardValue />
        <CardValue />
        <CardValue />
      </div>
    </div>
  );
}

export default Values