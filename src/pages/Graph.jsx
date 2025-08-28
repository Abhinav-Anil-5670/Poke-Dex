import React, { useEffect, useState } from 'react'
import { BarChart, Bar, XAxis, YAxis, Tooltip, CartesianGrid, ResponsiveContainer } from "recharts";

const typeColors = {
  normal: '#9ca3af',   
  fire: '#ef4444',     
  water: '#3b82f6',    
  electric: '#facc15', 
  grass: '#22c55e',    
  ice: '#bfdbfe',      
  fighting: '#b91c1c',
  poison: '#a855f7',   
  ground: '#a16207',   
  flying: '#a5b4fc',   
  psychic: '#f472b6',  
  bug: '#84cc16',      
  rock: '#713f12',     
  ghost: '#4338ca',    
  dragon: '#312e81',   
  dark: '#1f2937',     
  steel: '#6b7280',    
  fairy: '#f9a8d4'     
};
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




function CustomTooltip({ active, payload, label, pokemon }) {
  if (active && payload && payload.length) {
    const colorClass = pokemon
      ? Colors[pokemon.types[0].type.name]
      : "text-black";

    return (
      <div className="bg-white shadow-md rounded-lg p-2 border border-gray-200">
        <p className="font-semibold text-gray-800">{label}</p>
        <p className={`text-sm ${colorClass}`}>{payload[0].value}</p>
      </div>
    );
  }
  return null;
}




const Graph = ({pokemon}) => {

    const [data, setdata] = useState([])

    useEffect(()=>{
        const stats = [{stat : "Hp", value : `${pokemon.stats.find(stat => stat.stat.name === "hp")?.base_stat}`},
            {stat : "Attack", value : `${pokemon.stats.find(stat => stat.stat.name === "attack")?.base_stat}`},
            {stat : "Defense", value : `${pokemon.stats.find(stat => stat.stat.name === "defense")?.base_stat}`},
            {stat : "Special_Attack", value : `${pokemon.stats.find(stat => stat.stat.name === "special-attack")?.base_stat}`},
            {stat : "Speed", value : `${pokemon.stats.find(stat => stat.stat.name === "speed")?.base_stat}`}]
            setdata(stats)
        console.log(pokemon)
        console.log(stats)
    },[pokemon])


  return pokemon ?  (
    <div className="w-full h-96 p-4 bg-white shadow rounded-2xl">
      <h2 className="text-xl font-bold mb-4">Character Stats</h2>
      <ResponsiveContainer width="100%" height="100%">
        <BarChart data={data}>
          <CartesianGrid strokeDasharray="3 3" className="stroke-gray-200" />
          <XAxis dataKey="stat" className="text-sm" />
          <YAxis className="text-sm" domain={[0, 255]} />
          <Tooltip content={<CustomTooltip />} pokemon={pokemon}/>
          <Bar dataKey="value" fill={`${typeColors[pokemon.types[0].type.name]}`} radius={[6, 6, 0, 0]} barSize={40} />
        </BarChart>
      </ResponsiveContainer>
    </div>
  ) : <h1>Loading....</h1>
}

export default Graph