import { useState } from "react";

export default function Navbar({ darkMode, toggleDarkMode }) {
  const [hamMenu, setHamMenu] = useState(false);

  function toggleHamMemu() {
    setHamMenu((prevHamMenu) => !prevHamMenu);
  }

  const darkModeStyles = {
    backgroundColor: darkMode ? "#D9D849" : "#1b1b1b",
  };

  return (
    <nav className="navbar container font-finlandica mx-auto py-5 md:pr-5 px-4 md:px-0 relativ2">
      <div className="flex item-center justify-between">
        <div className="navbar--logo flex items-center space-x-1 font-bold">
          <span>Real</span>
          <span className="text-re-green">Estate</span>
        </div>

        {/* Dark-mode buttom */}
        {!darkMode && (
          <button
            class="bg-re-d-mode p-2 rounded-full text-white hover:bg-re-dh-mode active:bg-re-dd-green focus:outline-none focus:ring focus:ring-re-brown"
            style={darkModeStyles}
            onClick={toggleDarkMode}
          >
            <div className="flex items-center justify-center">
              <i class="ri-contrast-2-fill ri-xl"></i>
            </div>
          </button>
        )}

        {darkMode && (
          <button
            class="bg-re-green p-2 rounded-full text-white hover:bg-re-d-green active:bg-re-dd-green focus:outline-none focus:ring focus:ring-re-brown"
            onClick={toggleDarkMode}
          >
            <div className="flex items-center justify-center">
              <i class="ri-sun-fill ri-xl"></i>
            </div>
          </button>
        )}

        <div className="navbar--nav containe hidden md:flex items-center justify-end space-x-16 font-medium">
          <a
            href="#"
            className="hover:border-b-2 border-re-green active:text-re-green focus:border-b-4"
          >
            Home
          </a>
          <a
            href="#services"
            className="hover:border-b-2 border-re-green active:text-re-green focus:border-b-4"
          >
            Service
          </a>
          <a
            href="#tour"
            className="hover:border-b-2 border-re-green active:text-re-green focus:border-b-4"
          >
            About
          </a>
          <a
            href="#contact"
            className="hover:border-b-2 border-re-green active:text-re-green focus:border-b-4"
          >
            Contact
          </a>
          <a
            href="#"
            className="bg-re-green text-white px-5 py-1 rounded-sm hover:bg-re-d-green active:bg-re-dd-green focus:outline-none focus:ring focus:ring-re-brown"
          >
            Sign In
          </a>
        </div>

        {/* Hambugger menu */}
        {!hamMenu && (
          <button
            class="md:hidden bg-re-green p-2 rounded-full text-white hover:bg-re-d-green active:bg-re-dd-green focus:outline-none focus:ring focus:ring-re-brown"
            onClick={toggleHamMemu}
          >
            <div className="flex items-center justify-center">
              <i class="ri-menu-5-fill ri-xl"></i>
            </div>
          </button>
        )}

        {hamMenu && (
          <button
            class="md:hidden bg-re-green p-2 rounded-full text-white hover:bg-re-d-green active:bg-re-dd-green focus:outline-none focus:ring focus:ring-re-brown"
            onClick={toggleHamMemu}
          >
            <div className="flex items-center justify-center">
              <i class="ri-close-fill ri-xl"></i>
            </div>
          </button>
        )}
      </div>

      {/* Mobile menu */}
      {hamMenu && (
        <div
          style={{
            color: darkMode ? "white" : "",
          }}
        >
          <div
            style={{ background: darkMode ? "#494949" : "" }}
            className="absolute z-10 flex flex-col items-center self-end py-8 mt-8 space-y-6 font-medium bg-re-white sm:w-auto sm:self-center left-6 right-6 drop-shadow-md"
          >
            <a
              href="#"
              className="hover:border-l-2 border-re-green active:text-re-green focus:border-l-4"
            >
              Home
            </a>
            <a
              href="#services"
              className="hover:border-l-2 border-re-green active:text-re-green focus:border-l-4"
            >
              Service
            </a>
            <a
              href="#tour"
              className="hover:border-l-2 border-re-green active:text-re-green focus:border-l-4"
            >
              About
            </a>
            <a
              href="#contact"
              className="hover:border-l-2 border-re-green active:text-re-green focus:border-l-4"
            >
              Contact
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}
