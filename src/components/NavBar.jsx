import React from 'react';
import { Link } from 'react-router-dom';


const PokeballLogo = () => (
  <svg
    className="h-8 w-8"
    viewBox="0 0 100 100"
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    stroke="currentColor"
    strokeWidth="5"
  >
    <circle cx="50" cy="50" r="45" stroke="black" fill="white" />
    <path d="M50 50 A45 45 0 0 1 95 50" fill="red" stroke="black" />
    <circle cx="50" cy="50" r="15" fill="white" stroke="black" />
    <circle cx="50" cy="50" r="7" fill="black" stroke="black" />
  </svg>
);


function Navbar() {
  return (
    <nav className="bg-white/80 backdrop-blur-md shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          
          
          <div className="flex-shrink-0">
            <Link to="/" className="flex items-center space-x-2 text-gray-800 hover:text-red-600 transition-colors">
              <PokeballLogo />
              <span className="font-bold text-xl hidden sm:inline">PokéDex</span>
            </Link>
          </div>

          
          <div className=" md:flex md:items-center md:space-x-8">
            
            <Link to="/pokemon" className="text-gray-600 hover:text-red-600 font-semibold px-3 py-2 rounded-md text-sm transition-colors">
              Pokemon
            </Link>
            
          </div>

          
          <div className="flex items-center space-x-4">
             <Link to="/myteam" className="text-gray-600 hover:text-red-600 font-semibold px-3 py-2 rounded-md text-sm transition-colors">
              Favourites
            </Link>
            
          </div>

        </div>
      </div>
    </nav>
  );
}

export default Navbar;
