import React from 'react';
import { Link } from 'react-router-dom'; 

const Colors = {
  normal: 'text-gray-400',
  fire: 'text-red-500',
  water: 'text-blue-500',
  electric: 'text-yellow-400',
  grass: 'text-green-500',
  ice: 'text-blue-200',
  fighting: 'text-red-700',
  poison: 'text-purple-500',
  ground: 'text-yellow-700',
  flying: 'text-indigo-300',
  psychic: 'text-pink-400',
  bug: 'text-lime-500',
  rock: 'text-yellow-800',
  ghost: 'text-indigo-700',
  dragon: 'text-indigo-900',
  dark: 'text-gray-800',
  steel: 'text-gray-500',
  fairy: 'text-pink-300'
};

const EvolutionChain = ({ chain,pokedata }) => {
  
  if (!chain || chain.length === 0) {
    return (
      <div className="text-center text-gray-400 py-8">
        <h1>This Pokémon does not evolve.</h1>
      </div>
    );
  }

  return pokedata ?  (
    
    <div className="flex justify-center items-center flex-wrap gap-4 sm:gap-8 py-4">
      {chain.map((pokemon, index) => (
        
        <React.Fragment key={pokemon.id}>
          
          
          <Link to={`/pokemon/${pokemon.id}`} className="flex flex-col items-center gap-2 group">
            
            <div className="bg-gray-800/50 rounded-full p-4 transition-transform duration-300 group-hover:scale-110 group-hover:bg-gray-700">
              <img
                src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${pokemon.id}.png`}
                alt={pokemon.name}
                className="h-24 w-24 sm:h-32 sm:w-32 object-contain"
                
                onError={(e) => {
                  e.currentTarget.onerror = null; 
                  e.currentTarget.src=`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemon.id}.png`
                }}
              />
            </div>
            
            <h1 className={`text-lg font-semibold capitalize tracking-wide ${Colors[pokedata.types[0].type.name]} group-hover:text-white`}>
              {pokemon.name}
            </h1>
          </Link>

          
          {index < chain.length - 1 && (
            <div className="text-4xl font-light text-gray-500 hidden sm:block">
              →
            </div>
          )}

        </React.Fragment>
      ))}
    </div>
  ): <h1>Loading....</h1>
};

export default EvolutionChain;
