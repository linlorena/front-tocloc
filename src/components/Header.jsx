import React, { useState } from 'react';
import { Bookmark, House, ListPlus, Question, ReadCvLogo, SignIn, Users } from '@phosphor-icons/react';
import { Search } from 'lucide-react';
import { Link } from 'react-router-dom';

export function Header({ toggleDarkMode, isDarkMode }) {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="flex flex-wrap items-center justify-between px-4 py-4 bg-white dark:bg-gray-800 border-b-4 border-teal-600">
      
      <div className="flex items-center justify-between w-full sm:w-auto">
        <Link to="/">
          <img src="/image/logo_tocloc.png" alt="Logo" className="w-40 sm:w-48 lg:w-64" />
        </Link>

        <div className="sm:hidden flex items-center ml-4">
          <button 
            onClick={toggleDarkMode}
            className="p-2 rounded-full bg-teal-500 hover:bg-teal-600 text-white mr-4"
          >
            {isDarkMode ? '🌙' : '🌞'}
          </button>

          <div className="flex items-center rounded-3xl bg-orange-500 hover:bg-orange-600 px-4 py-2 cursor-pointer">
            <SignIn size={20} className="text-gray-100 mr-2" />
            <span className="text-gray-100 font-bold">
              <Link to="/login">Entrar</Link>
            </span>
          </div>

          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="ml-2 text-gray-600 dark:text-gray-100 focus:outline-none">
            {menuOpen ? '✖' : '☰'}
          </button>
        </div>
      </div>

      <div className="mt-4 sm:mt-0 w-full sm:w-auto flex items-center justify-center">
        <div className="w-full sm:max-w-md lg:max-w-lg max-w-lg bg-gray-200 dark:bg-gray-700 rounded-full px-4 py-2 flex items-center">
          <input
            type="text"
            placeholder="Buscar"
            className="w-full bg-transparent border-none focus:outline-none placeholder:text-gray-400 text-gray-600 dark:text-white"
          />
          <Search size={24} className="text-gray-400 hover:text-gray-600 ease-in duration-150" />
        </div>
      </div>

      {menuOpen && (
        <div className="flex flex-col w-full sm:hidden mt-4 space-y-2 text-sm dark:text-orange-100">
          <Link to="/" className="flex items-center gap-2 justify-center font-semibold hover:text-orange-600">
            <House size={20} />
            Home
          </Link>
          <Link to="/sobre" className="flex items-center gap-2 justify-center font-semibold hover:text-orange-600">
            <Users size={20} />
            Sobre nós
          </Link>
          <Link to="/categorias" className="flex items-center gap-2 justify-center font-semibold hover:text-orange-600">
            <ListPlus size={20} />
            Categorias
          </Link>
          <Link to="/minhas-reservas" className="flex items-center gap-2 justify-center font-semibold hover:text-orange-600">
            <Bookmark size={20} />
            Minhas Reservas
          </Link>
          <Link to="/trabalhe-conosco" className="flex items-center gap-2 justify-center font-semibold hover:text-orange-600">
            <ReadCvLogo size={20} />
            Trabalhe conosco
          </Link>
          <Link to="/ajuda" className="flex items-center gap-2 justify-center font-semibold hover:text-orange-600">
            <Question size={20} />
            Ajuda
          </Link>
        </div>
      )}

      <div className="mt-4 mr-4 sm:mt-0 hidden sm:flex flex-col sm:flex-row flex-wrap items-center gap-4 text-md dark:text-orange-100">
        <Link to="/" className="flex items-center gap-1 font-bold hover:text-orange-600">
          <House size={18} />
          <span>Home</span>
        </Link>
        <span className="text-teal-500">✶</span>
        <Link to="/sobre" className="flex items-center gap-1 font-bold hover:text-orange-600">
          <Users size={18} />
          <span>Sobre nós</span>
        </Link>
        <span className="text-teal-500">✶</span>
        <Link to="/categorias" className="flex items-center gap-1 font-bold hover:text-orange-600">
          <ListPlus size={18} />
          <span>Categorias</span>
        </Link>
        <span className="text-teal-500">✶</span>
        <Link to="/minhas-reservas" className="flex items-center gap-1 font-bold hover:text-orange-600">
          <Bookmark size={18} />
          <span>Minhas Reservas</span>
        </Link>
        <span className="text-teal-500">✶</span>
        <Link to="/trabalhe-conosco" className="flex items-center gap-1 font-bold hover:text-orange-600">
          <ReadCvLogo size={18} />
          <span>Trabalhe conosco</span>
        </Link>
        <span className="text-teal-500">✶</span>
        <Link to="/ajuda" className="flex items-center gap-1 font-bold hover:text-orange-600">
          <Question size={18} />
          <span>Ajuda</span>
        </Link>
      </div>

      <div className="hidden sm:flex items-center gap-4">
        <button 
          onClick={toggleDarkMode}
          className="p-2 rounded-full bg-teal-500 hover:bg-teal-600 text-white"
        >
          {isDarkMode ? '🌙' : '🌞'}
        </button>
        
        <div className="flex items-center rounded-3xl bg-orange-500 hover:bg-orange-600 px-4 py-2 cursor-pointer">
          <SignIn size={20} className="text-gray-100 mr-2" />
          <span className="text-gray-100 font-bold">
            <Link to="/login">Entrar</Link>
          </span>
        </div>
      </div>
    </div>
  );
}

export default Header;
