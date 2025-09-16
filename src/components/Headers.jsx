import { useState } from "react";

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="flex justify-between items-center p-4 relative z-50">
      <h1
        className={`text-2xl font-bold transition-colors duration-200 ${
          open ? "text-white" : "text-black"
        }`}
      >
        Mikel Fernandes
      </h1>

      {/* Hamburger icon */}
      {/* <button
        className="flex flex-col space-y-1.5 focus:outline-none cursor-pointer"
        onClick={() => setOpen(true)}
      >
        <span
          className={`block w-7 h-0.5 transition-colors duration-200 ${
            open ? "bg-white" : "bg-black"
          }`}
        ></span>
        <span
          className={`block w-7 h-0.5 transition-colors duration-200 ${
            open ? "bg-white" : "bg-black"
          }`}
        ></span>
        <span
          className={`block w-7 h-0.5 transition-colors duration-200 ${
            open ? "bg-white" : "bg-black"
          }`}
        ></span>
      </button> */}

      <button  onClick={() => setOpen(true)}>
      <span className="material-symbols-outlined cursor-pointer">menu</span>

      </button>


      {/* Fullscreen Menu */}
      {open && (
        <div className="fixed inset-0 bg-black bg-opacity-95 flex flex-col justify-center items-center space-y-6 text-2xl font-bold z-50">
          {/* Close button */}
          <button
            className="absolute top-4 right-4 text-white text-3xl cursor-pointer hover:scale-125 transition-transform duration-200"
            onClick={() => setOpen(false)}
          >
            ✕
          </button>

          <a href="#home" className="text-white hover:text-gray-400">
            HOME
          </a>
          <a href="#about" className="text-white hover:text-gray-400">
            ABOUT
          </a>
          <a href="#projects" className="text-white hover:text-gray-400">
            PROJECTS
          </a>
          <a href="#experience" className="text-white hover:text-gray-400">
            EXPERIENCE
          </a>
          <a href="#techstack" className="text-white hover:text-gray-400">
            TECH STACK
          </a>
          <a href="#blogs" className="text-white hover:text-gray-400">
            BLOGS
          </a>
          <a href="#contact" className="text-white hover:text-gray-400">
            CONTACT
          </a>
        </div>
      )}
    </header>
  );
}
