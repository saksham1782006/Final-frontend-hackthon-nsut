import { NavLink } from "react-router-dom";
import logo from "../../assets/drop.svg";

const baseClasses =
  "px-3 py-1.5 rounded-md text-sm font-medium transition";

const Navbar = () => {
  return (
    <header className="w-full h-14 bg-white border-b border-gray-200 flex items-center justify-between px-6 shadow-sm">
      
      <div className="flex items-center gap-2">
        <img src={logo} alt="Logo" className="w-5 h-5" />
        <h1 className="text-lg font-semibold text-gray-800">
          Hydro Alert
        </h1>
      </div>

      <nav className="flex items-center gap-5">
        <NavLink
          to="/"
          end
          className={({ isActive }) =>
            `${baseClasses} ${
              isActive
                ? "bg-gray-100 text-gray-900"
                : "text-gray-600 hover:bg-gray-100"
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
                ? "bg-gray-100 text-gray-900"
                : "text-gray-600 hover:bg-gray-100"
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
                ? "bg-gray-100 text-gray-900"
                : "text-gray-600 hover:bg-gray-100"
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
                ? "bg-gray-100 text-gray-900"
                : "text-gray-600 hover:bg-gray-100"
            }`
          }
        >
          About Us
        </NavLink>
      </nav>
    </header>
  );
};

export default Navbar;
