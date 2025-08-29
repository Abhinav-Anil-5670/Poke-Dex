import React, { useEffect, useState } from "react";
import axios from "axios";

const Colors = {
  normal: "text-gray-400",
  fire: "text-red-500",
  water: "text-blue-500",
  electric: "text-yellow-400",
  grass: "text-green-500",
  ice: "text-blue-200",
  fighting: "text-red-700",
  poison: "text-purple-500",
  ground: "text-yellow-700",
  flying: "text-indigo-300",
  psychic: "text-pink-400",
  bug: "text-lime-500",
  rock: "text-yellow-800",
  ghost: "text-indigo-700",
  dragon: "text-indigo-900",
  dark: "text-gray-800",
  steel: "text-gray-500",
  fairy: "text-pink-300",
};

const Attributes = ({ pokemon, species }) => {
  
  const [abilityDetails, setAbilityDetails] = useState({});
  
  const [loadingAbilities, setLoadingAbilities] = useState(true);

  
  useEffect(() => {
    
    const fetchAllAbilityDetails = async () => {
      
      if (!pokemon || !pokemon.abilities) {
        setLoadingAbilities(false);
        return;
      }

      try {
        setLoadingAbilities(true);

        
        const promises = pokemon.abilities.map((abInfo) =>
          axios.get(abInfo.ability.url)
        );

        
        const responses = await Promise.all(promises);

        
        const details = {};
        responses.forEach((response) => {
          const abilityName = response.data.name;
          const englishEntry = response.data.effect_entries.find(
            (entry) => entry.language.name === "en"
          );
          
          details[abilityName] = englishEntry
            ? englishEntry.effect
            : "No description available.";
        });

        
        setAbilityDetails(details);
      } catch (error) {
        console.error("Failed to fetch ability details:", error);
      } finally {
        
        setLoadingAbilities(false);
      }
    };

    fetchAllAbilityDetails();
  }, [pokemon]); 

  
  if (!pokemon || !species) {
    return <h1>Loading Pokémon data...</h1>;
  }

  return (
    <div className="bg-white rounded-xl shadow-lg p-6  mx-auto font-sans">
      
      <p className={`italic ${Colors[pokemon.types[0].type.name]} text-center mb-6`}>
        {
          species.flavor_text_entries.find(
            (entry) => entry.language.name === "en"
          )?.flavor_text
        }
      </p>

      
      <div className="grid grid-cols-2 gap-4 text-center mb-8">
        <div className="bg-gray-100 p-3 rounded-lg">
          <h2 className="font-semibold text-lg text-gray-800">
            {pokemon.height / 10} m
          </h2>
          <p className="text-xs text-gray-500 uppercase tracking-wider">
            Height
          </p>
        </div>
        <div className="bg-gray-100 p-3 rounded-lg">
          <h2 className="font-semibold text-lg text-gray-800">
            {pokemon.weight / 10} kg
          </h2>
          <p className="text-xs text-gray-500 uppercase tracking-wider">
            Weight
          </p>
        </div>
      </div>

     
      <h2 className={`text-2xl font-bold ${Colors[pokemon.types[0].type.name]} mb-4 border-b border-gray-200 pb-2`}>
        Abilities
      </h2>
      <ul className="space-y-4">
        {pokemon.abilities.map((abInfo) => (
          <li
            key={abInfo.ability.name}
            className="bg-gray-50 p-4 rounded-lg transition-shadow hover:shadow-md"
          >
            <strong className="capitalize text-lg font-semibold text-black">
              {abInfo.ability.name}
            </strong>
            {abInfo.is_hidden && (
              <span className="ml-2 text-xs font-medium bg-red-100 text-red-800 px-2 py-0.5 rounded-full">
                Hidden
              </span>
            )}

            
            <p className="mt-1 text-sm text-gray-600">
              {loadingAbilities
                ? "Loading description..."
                : abilityDetails[abInfo.ability.name]}
            </p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Attributes;
