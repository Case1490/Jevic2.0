import CheckIcon from "../icons/CheckIcon";

const CardValue = () => {
  return (
    <div className="flex items-start gap-x-4 bg-gray-200 p-2 rounded-xl">
      <div>
        <CheckIcon />
      </div>
      <div>
        <h1 className="font-bold text-DarkMain">Innovación</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione, quam
          reiciendis sit unde deleniti nisi ad dolorum non esse voluptatibus!
        </p>
      </div>
    </div>
  );
};

export default CardValue;
