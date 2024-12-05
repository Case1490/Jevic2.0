import Logo from '../assets/Logo.png';
import HeartIcon from '../icons/HeartIcon';
import ShopyCart from '../icons/ShopyCart';
import MenuNavbar from './MenuNavbar';
import Search from './Search';


const Navbar = () => {
  return (
    <div className='fixed w-full bg-white z-50'>
      <div className="w-[80%] m-auto flex items-center gap-x-10 justify-center  py-4">
        <div className="w-[60px]">
          <img src={Logo} alt="JevicTecnology" className="w-full" />
        </div>

        <div className="flex-1">
          <Search />
        </div>

        <div className="flex gap-x-4 items-center">
          <div className="relative">
            <HeartIcon />
            <span className="absolute text-sm text-white top-[-6px] right-[-10px] bg-BlueMain rounded-full text-center px-2">
              2
            </span>
          </div>
          <div className="relative">
            <ShopyCart />
            <span className="absolute text-sm text-white top-[-6px] right-[-10px] bg-BlueMain rounded-full text-center px-2">
              2
            </span>
          </div>
        </div>
      </div>
      <MenuNavbar/>
    </div>
  );
}

export default Navbar