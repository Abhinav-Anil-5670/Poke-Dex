import React from 'react';
import Card from '../components/Card';
import axios from 'axios';
import { useState } from 'react';



const PokeBallIcon = () => (

  
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="black"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className="h-6 w-6"
  >
    <line x1="12" y1="2" x2="12" y2="22" />
    <path d="M12 2a10 10 0 0 0-10 10h20a10 10 0 0 0-10-10z" fill="#EF4444" stroke="black" />
    <path d="M12 22a10 10 0 0 0 10-10H2a10 10 0 0 0 10 10z" fill="#F9FAFB" stroke="black" />
    <circle cx="12" cy="12" r="4" fill="#2D3748" stroke="black" />
    <circle cx="12" cy="12" r="2" fill="white" stroke="black" />
</svg>
);


const Home = () => {
  const [inputValue, setInputValue] = useState('');
  const [pokemondata,setpokemondata] = useState()
  

  
  const pokemon = async (pokemon_name)=>{
    const{data} = await axios.get(`https://pokeapi.co/api/v2/pokemon/${pokemon_name}`)
    setpokemondata(data)
    console.log(data)
  }
  const handleChange = (e) => {
      setInputValue(e.target.value);
      
      
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted with:', inputValue);
    pokemon(inputValue)
    
  };
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100  text-center p-4 font-sans">
      
     
      <div className="w-full max-w-2xl mx-auto">
        
        
        <div className="relative w-32 h-32 mx-auto mb-8 animate-bounce">
            <div className="absolute top-0 left-0 w-full h-1/2 bg-red-500 rounded-t-full border-4  border-gray-200"></div>
            <div className="absolute bottom-0 left-0 w-full h-1/2 bg-white rounded-b-full border-4  border-gray-200"></div>
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-8 h-8 bg-white rounded-full border-4  border-gray-200"></div>
            <div className="absolute top-1/2 left-0 w-full h-2  bg-gray-200 -translate-y-1/2"></div>
        </div>

        
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold  text-black">
          Pokédex
        </h1>
        <p className="mt-4 text-lg  text-black max-w-xl mx-auto">
          Your ultimate guide to the world of Pokémon. Discover stats, abilities, evolutions, and more.
        </p>

        
        <div className="mt-10 max-w-lg mx-auto">
          <form onSubmit={handleSubmit} className="relative flex items-center shadow-lg rounded-full overflow-hidden">
            <input onChange={handleChange} value={inputValue}
              type="text"
              placeholder="Search by name or Pokédex number..."
              className="w-full py-4 pl-6 pr-20 text-lg  bg-white  text-black focus:outline-none focus:ring-4 focus:ring-red-500/50 transition-shadow duration-300"
            />
            <button
              type="submit"
              className="absolute right-2 top-1/2 -translate-y-1/2 bg-red-500 text-white p-2.5 rounded-full hover:bg-red-600 focus:outline-none focus:ring-4 focus:ring-red-500/50 transition-all duration-300 transform hover:scale-105"
              aria-label="Search Pokémon"
            >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
            </button>
          </form>
        </div>

      </div>
     <div className='mt-10'>
       <Card pokemon={pokemondata}/>
     </div>
    </div>
  )
}

export default Home;
