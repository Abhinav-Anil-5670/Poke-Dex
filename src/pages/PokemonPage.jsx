import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import {fetchpokemon,fetchpokemonspecies} from '../reducers/singleSlice'

const PokemonPage = () => {
  
  const {id} = useParams()
  const dispatch = useDispatch()

  const list = useSelector((state) =>state.single.list)
  const status = useSelector((state) =>state.single.status)
  const morelist = useSelector((state) =>state.single.morelist)



  useEffect(()=>{
    dispatch(fetchpokemon(id))
    dispatch(fetchpokemonspecies(id))
  },[])

  if (status === 'loading') {
    return <p className="loading-message">Loading Pokémon...</p>;
  }

  return (
    <div>{list.name}{morelist.base_happiness}</div>
  )
}

export default PokemonPage