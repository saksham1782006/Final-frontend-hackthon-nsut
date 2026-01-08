import { NavLink } from "react-router-dom";
import logo from "../../assets/drop.svg";

const baseClasses =
  "px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 ease-in-out";

const Navbar = () => {
  return (
    <header className="sticky top-0 z-50 w-full bg-white/90 backdrop-blur-md border-b border-gray-200/50 shadow-sm">
      <div className="flex items-center justify-between px-8 h-16 max-w-7xl mx-auto">
        
        <div className="flex items-center gap-3 group cursor-pointer">
          <div className="w-9 h-9 rounded-lg flex items-center justify-center shadow-md group-hover:shadow-lg transition-shadow duration-200">
            <img src={logo} alt="Logo" className="w-5 h-5 drop-shadow-sm" />
          </div>
          <h1 className="text-xl font-bold bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent">
            Hydro Alert
          </h1>
        </div>

        <nav className="flex items-center gap-2">
          <NavLink
            to="/"
            end
            className={({ isActive }) =>
              `${baseClasses} ${
                isActive
                  ? "bg-blue-500 text-white shadow-md shadow-blue-200"
                  : "text-gray-600 hover:bg-gray-100 hover:text-gray-900 hover:scale-105"
              }`
            }
          >
            Dashboard
          </NavLink>

          <NavLink
            to="/map"
            className={({ isActive }) =>
              `${baseClasses} ${
                isActive
                  ? "bg-blue-500 text-white shadow-md shadow-blue-200"
                  : "text-gray-600 hover:bg-gray-100 hover:text-gray-900 hover:scale-105"
              }`
            }
          >
            Map
          </NavLink>

          <NavLink
            to="/analytics"
            className={({ isActive }) =>
              `${baseClasses} ${
                isActive
                  ? "bg-blue-500 text-white shadow-md shadow-blue-200"
                  : "text-gray-600 hover:bg-gray-100 hover:text-gray-900 hover:scale-105"
              }`
            }
          >
            Analytics
          </NavLink>

          <NavLink
            to="/about-us"
            className={({ isActive }) =>
              `${baseClasses} ${
                isActive
                  ? "bg-blue-500 text-white shadow-md shadow-blue-200"
                  : "text-gray-600 hover:bg-gray-100 hover:text-gray-900 hover:scale-105"
              }`
            }
          >
            About Us
          </NavLink>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
