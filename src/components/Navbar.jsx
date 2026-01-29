import { useState } from 'react';
import { IoLogoWhatsapp } from "react-icons/io";
import { FaFacebook, FaTiktok, FaInstagram  } from "react-icons/fa";
import LogoInvisible from '../assets/logos.webp'; 

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-zinc-950 border-b border-yellow-700/50 px-6 py-4 shadow-xl">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        
        {/* Logo / Nombre */}
        <div className="flex items-center">
          <img
            src={LogoInvisible}
            alt="Logo M son vallenato"
            className="h-15 w-auto object-contain"
          />

          <span className="text-xl font-bold bg-clip-text text-transparent bg-linear-to-r from-yellow-500 to-red-600 hidden sm:block">
            M son vallenato!
          </span>
        </div>

        {/* Menú Desktop */}
        <div className="hidden md:flex items-center space-x-4 text-sm font-semibold uppercase tracking-widest justify-end pr-12">
            <a href="#" className="text-yellow-500 hover:text-red-500 transition-colors px-4 py-2">Inicio</a>
            <a href="https://wa.me/573219965971" target="_blank" className="text-gray-300 hover:text-yellow-500 transition-colors px-2 disabled:"><IoLogoWhatsapp size={24}/></a>
            <a href="https://www.facebook.com/people/M-Son-Vallenato/61587264470123/" target="_blank" className="text-gray-300 hover:text-yellow-500 transition-colors px-2"><FaFacebook size={24}/></a>
            <a href="https://www.tiktok.com/@m.son.vallenato" target="_blank" className="text-gray-300 hover:text-yellow-500 transition-colors px-2"><FaTiktok size={24}/></a>
            <a href="https://www.instagram.com/msonvallenato?igsh=MW9yOGt1a3V0aHN3NA%3D%3D" target="_blank" className="text-gray-300 hover:text-yellow-500 transition-colors px-2"><FaInstagram size={24}/></a>
        </div>

        {/* Botón Menú Móvil */}
        <button 
          className="md:hidden text-yellow-500"
          onClick={() => setIsOpen(!isOpen)}
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            {isOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
            )}
          </svg>
        </button>
      </div>

      {/* Menú Desplegable Móvil */}
      {isOpen && (
        <div className="md:hidden mt-4 flex flex-col space-y-4 pb-4 border-t border-zinc-800 pt-4 text-center">
          <a href="#" className="text-yellow-500">Inicio</a>
          <div className="flex justify-center gap-6 py-2">
            <a href="https://wa.me/573219965971" target="_blank" className="text-gray-300 hover:text-yellow-500 transition-colors px-2"><IoLogoWhatsapp size={24}/></a>
            <a
                href="fb://profile/61587264470123"
                onClick={(e) => {
                  setTimeout(() => {
                    window.location.href =
                      "https://www.facebook.com/people/M-Son-Vallenato/61587264470123/"
                  }, 500)
                }}
                className="bg-yellow-500 text-black px-4 py-2 rounded-full font-bold text-sm flex items-center gap-2 hover:bg-yellow-400 transition"
              >
                <FaFacebook className="text-blue-600 text-lg" />
                Facebook
            </a>
            <a href="https://www.tiktok.com/@m.son.vallenato" target="_blank" className="text-gray-300 hover:text-yellow-500 transition-colors px-2"><FaTiktok size={24}/></a>
            <a href="https://www.instagram.com/msonvallenato?igsh=MW9yOGt1a3V0aHN3NA%3D%3D" target="_blank" className="text-gray-300 hover:text-yellow-500 transition-colors px-2"><FaInstagram size={24}/></a>
          </div>
        </div>
      )}
    </nav>
  );
}