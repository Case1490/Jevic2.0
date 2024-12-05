import { Link } from 'react-router-dom';
import SocialMedia from './SocialMedia';
import LocationIcon from '../icons/LocationIcon';
import PhoneIcon from '../icons/PhoneIcon';
import EmailIcon from '../icons/EmailIcon';

const Footer = () => {

  const year = new Date().getFullYear();
  
  return (
    <div className="bg-DarkMain">
      <div className="w-[80%] m-auto py-5 text-white flex items-center justify-between gap-x-8">
        {/* primera columna */}
        <div className=" flex-1 text-center">
          <h1 className="text-3xl my-4 font-bold">Acerca de</h1>
          <p>
            En JevicTecnology, estamos comprometidos con ofrecer productos
            tecnológicos de última generación que se adapten a las necesidades
            de nuestros clientes. Nuestra misión es proporcionar soluciones
            innovadoras y accesibles, desde dispositivos electrónicos hasta
            equipos especializados, asegurando calidad, confiabilidad y un
            servicio excepcional.
          </p>
        </div>
        {/* segunda columna */}
        <div className="flex-1">
          <h1 className="text-3xl font-bold text-center">Categorías</h1>

          <div className="flex flex-col mt-4 items-center space-y-4">
            <Link className="hover:text-CoralMain">Celulares</Link>
            <Link className="hover:text-CoralMain">SmartWatch</Link>
            <Link className="hover:text-CoralMain">Periféricos</Link>
            <Link className="hover:text-CoralMain">Cargadores</Link>
            <Link className="hover:text-CoralMain">Audífonos</Link>
            <Link className="hover:text-CoralMain">Cámaras IP</Link>
          </div>
        </div>
        {/* tercera columna */}
        <div className="flex-1 text-center">
          <h1 className="text-2xl font-bold">
            Nuestras principales redes sociales
          </h1>
          <p className="my-4">
            ¡Conéctate con nosotros y no te pierdas ninguna novedad! Síguenos en
            nuestras principales redes sociales para estar al día con
            promociones, productos y mucho más
          </p>

          <SocialMedia />
        </div>
      </div>
      <hr />

      <div className="w-[80%] m-auto py-4 flex items-center justify-between text-white">
        <div className="flex items-center gap-x-1">
          <LocationIcon />
          <h1>Calle Tecnología 123, Ciudad Digital</h1>
        </div>

        <div className="flex items-center gap-x-1">
          <PhoneIcon />
          <h1>+34 900 123 456</h1>
        </div>

        <div className="flex items-center gap-x-1">
          <EmailIcon />
          <h1>info@techstore.com</h1>
        </div>
      </div>

      <hr />

      <div className="w-[80%] m-auto flex items-center justify-between py-4 text-gray-400">
        <h1>&copy; {year} JevicTecnology. Todos los derechos reservados.</h1>
        <div className="flex items-center gap-x-2">
          <Link className="hover:text-white">Política de Privacidad</Link>
          <span>|</span>
          <Link className="hover:text-white">Términos y Condiciones</Link>
        </div>
      </div>
    </div>
  );
}

export default Footer