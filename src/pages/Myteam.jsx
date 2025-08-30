import React from 'react'
import { useSelector } from 'react-redux'
import Card from '../components/Card'
import { Link } from 'react-router-dom'
const Myteam = () => {
  const list = useSelector((state)=>state.favourite.list)

  document.title = "Pokédex | Pokemon List";
  
  return list.length !==0 ? (
    <div className='flex flex-wrap justify-center items-center gap-5 mt-5'>
          {list.map((pokemon)=>(
            <Link to={`/pokemon/${pokemon.id}`} key={pokemon.id}>
              <Card pokemon={pokemon} key={pokemon.id}/>
            </Link>
          ))}
        </div>
  ) : <h1 className='text-center text-7xl md:text-9xl mt-10'>Add Pokémon's to your Favourites</h1>
}

export default Myteam