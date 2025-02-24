import { FaUser, FaUserCircle } from "react-icons/fa";
import { FiMenu, FiBell } from "react-icons/fi";
import logo from "../assets/logo.png"

const Navbar = ({ toggleSidebar }) => {
    return (
      <header className="flex items-center justify-between p-4 bg-white shadow-md fixed w-full md:relative md:w-auto">
        <h2 className="text-lg font-bold hidden md:block">Sessions Management</h2>
        <div className="flex md:hidden items-center space-x-2">
        <img src={logo} alt="Logo" className="w-[31px] h-[45px]" />
       <h2 className="text-lg font-bold">Rostrum Education</h2>
      </div>
        <div className="flex items-center space-x-4">
        <div className="relative">
  <FiBell className="w-6 h-6" />
  <span className="absolute top-0 right-0 w-2.5 h-2.5 bg-red-500 rounded-full"></span>
</div>

         <div className="flex items-center gap-2">
         <FaUserCircle className="w-8 h-8"/>
            <div className=" flex-col md:flex hidden cursor-pointer">
            <span className="font-semibold">John Doe</span>
            <span className="text-gray-500 text-base">Counsellar</span>
            </div>
         </div>
         <FiMenu size={24} className="md:hidden cursor-pointer" onClick={toggleSidebar} />
        </div>
      </header>
    );
  };

export default Navbar;
