import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import {fetchpokemon,fetchpokemonspecies,fetchpokemonevolution} from '../reducers/singleSlice'

const PokemonPage = () => {
  
  const {id} = useParams()
  const dispatch = useDispatch()

  const list = useSelector((state) =>state.single.list)
  const status = useSelector((state) =>state.single.status)
  const morelist = useSelector((state) =>state.single.morelist)
  const evolist = useSelector((state) =>state.single.evolist)
  

  
  useEffect(()=>{
    dispatch(fetchpokemon(id))
    dispatch(fetchpokemonspecies(id))
    dispatch(fetchpokemonevolution(id))
  },[])
 

  const isLoading = status !== 'succeeded' || list.length === 0 || morelist.length === 0 || evolist.length === 0;



  
  


  return !isLoading ? (
    <div>{list.name}{morelist.base_happiness}</div>
  ) : <h1>Loading</h1>
}

export default PokemonPage