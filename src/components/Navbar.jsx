import { useState } from "react";
import { Menu, X } from "lucide-react";
import { NavLink, useLocation, useNavigate } from "react-router-dom";
import Logo from "../images/logo.png";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  const handleContactClick = (e) => {
    e.preventDefault();    
    // Close mobile menu if open
    setIsOpen(false);

    window.open(
    "https://wa.me/923305580053?text=Hello%20there!%20I'm%20interested%20in%20your%20services.",
    "_blank"
  );
  };

  const navLinks = [
    { name: "Homepage", path: "/" },
    { name: "About Us", path: "/about" },
    { name: "Courses", path: "/courses" },
    { name: "Fee Structure", path: "/fee-structure" },
    { name: "FAQ", path: "/faq" },
    { name: "Contact Now", isContact: true },
  ];

  return (
    <nav className="w-full bg-white shadow-md z-50 font-inter">
      <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between">
        {/* Desktop Logo */}
        <div className="hidden md:flex items-center">
          <NavLink to="/">
            <img src={Logo} alt="Site Logo" className="h-16 w-auto" />
          </NavLink>
        </div>

        {/* Desktop Links */}
        <ul className="hidden md:flex space-x-8">
          {navLinks.map((link) =>
            link.name === "Contact Now" ? (
              <li key={link.name} className="font-inter text-sm">
                <NavLink
                  to={link.path}
                  className={({ isActive }) =>
                    `px-4 py-2 rounded transition ${isActive
                      ? "bg-customGreen text-white"
                      : "bg-customGreen rounded-tl-xl rounded-br-xl text-white hover:bg-green-800"
                    }`
                  }
                  onClick={handleContactClick}
                >
                  {link.name}
                </NavLink>
              </li>
            ) : (
              <li key={link.name} className="font-inter text-base">
                <NavLink
                  to={link.path}
                  className={({ isActive }) =>
                    `transition-colors duration-200 ${isActive ? "text-customGreen font-bold" : "text-black hover:text-customGreen"
                    }`
                  }
                >
                  {link.name}
                </NavLink>
              </li>
            )
          )}
        </ul>

        <div className="flex md:hidden w-full items-center justify-between h-20 px-4">
          {/* Hamburger Button */}
          <button onClick={() => setIsOpen(true)}>
            <Menu size={28} className="text-black" />
          </button>

          {/* Centered Logo */}
          <NavLink to="/" className="flex-1 flex justify-center">
            <img
              src={Logo}
              alt="Dar Al Huda Academy Logo"
              className="h-20 w-auto"  // slightly smaller to fit
            />
          </NavLink>
        </div>
      </div>

      {/* Mobile Slide Menu */}
      <div
        className={`fixed top-0 left-0 h-full w-64 bg-white shadow-lg transform ${isOpen ? "translate-x-0" : "-translate-x-full"
          } transition-transform duration-300 ease-in-out z-50`}
      >
        <div className="h-20 py-4 px-4 flex justify-between items-center border-b">
          <span className="text-lg text-black font-bold leading-none">Menu</span>
          <button onClick={() => setIsOpen(false)}>
            <X size={28} className="text-black" />
          </button>
        </div>
        <ul className="flex flex-col space-y-6 p-6">
          {navLinks.map((link) =>
            link.name === "Contact Now" ? (
              <li key={link.name}>
                <NavLink
                  to={link.path}
                  className={({ isActive }) =>
                    `px-4 py-2 rounded transition ${isActive
                      ? "bg-customGreen text-white"
                      : "bg-customGreen text-white hover:opacity-90"
                    }`
                  }
                  onClick={() => setIsOpen(false)}
                >
                  {link.name}
                </NavLink>
              </li>
            ) : (
              <li key={link.name}>
                <NavLink
                  to={link.path}
                  className={({ isActive }) =>
                    `transition-colors duration-200 ${isActive ? "text-customGreen font-bold" : "text-black hover:text-customGreen"
                    }`
                  }
                  onClick={() => setIsOpen(false)}
                >
                  {link.name}
                </NavLink>
              </li>
            )
          )}
        </ul>
      </div>
    </nav>
  );
}
