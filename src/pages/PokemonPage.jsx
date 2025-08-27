import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { pokeClient } from '../api/api';

function PokemonPage() {
  
  const { id } = useParams(); 

  
  const [pokemon, setPokemon] = useState(null);
  const [loading, setLoading] = useState(true);

  const fetchPokemonDetails = async () => {
      try {
        setLoading(true);
        const response = await pokeClient.get(`https://pokeapi.co/api/v2/pokemon/${id}`);
        setPokemon(response.data);
      } catch (error) {
        console.error("Failed to fetch Pokémon details:", error);
        setPokemon(null);
      } finally {
        setLoading(false);
      }
    };

  
  useEffect(() => {
    

    fetchPokemonDetails();
  }, [id]);

  
  if (loading) {
    return <div>Loading Pokémon...</div>;
  }

  if (!pokemon) {
    return <div>Pokémon not found!</div>;
  }

  return (
    <div>
      
      <h1>Pokemon name is: {pokemon.name.charAt(0).toUpperCase() + pokemon.name.slice(1)}</h1>
      <h2>Pokemon id is: {pokemon.id}</h2>
    </div>
  );
}

export default PokemonPage;