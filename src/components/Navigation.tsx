import { useState } from "react";
import { Menu, X } from "lucide-react";
import { Link } from "react-router-dom";

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  const menuItems = [
    { label: "Home", path: "/" },
    { label: "Services", path: "/services" },
    { label: "About", path: "/about" },
    { label: "Virtual Tour", path: "/virtual-tour" },
    { label: "Contact", path: "/contact" },
  ];

  return (
    <nav className="fixed top-0 left-0 w-full bg-white/90 backdrop-blur-md z-50 shadow-sm">
      <div className="container mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          <Link to="/" className="flex items-center space-x-2">
            <img
              src="/lovable-uploads/6abf9000-5f4b-47d6-aabe-c3c0fd488c7d.png"
              alt="Prolook Logo"
              
              className="h-12 w-auto"
            />
          </Link>
          
          <div className="hidden md:flex space-x-8">
            {menuItems.map((item) => (
              <Link
                key={item.label}
                to={item.path}
                className="text-prolook-black hover:text-prolook-blue transition-colors duration-200 font-medium"
              >
                {item.label}
              </Link>
            ))}
          </div>

          <button
            onClick={toggleMenu}
            className="md:hidden text-prolook-black hover:text-prolook-blue transition-colors duration-200"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden absolute top-full left-0 w-full bg-white/90 backdrop-blur-md shadow-lg animate-fade-in">
            <div className="container mx-auto px-4 py-4">
              {menuItems.map((item) => (
                <Link
                  key={item.label}
                  to={item.path}
                  className="block py-2 text-prolook-black hover:text-prolook-blue transition-colors duration-200 font-medium"
                  onClick={() => setIsOpen(false)}
                >
                  {item.label}
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;