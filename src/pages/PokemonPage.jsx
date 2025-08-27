import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import {fetchpokemon} from '../reducers/singleSlice'

const PokemonPage = () => {
  
  const {id} = useParams()
  const dispatch = useDispatch()

  const list = useSelector((state) =>state.single.list)
  const status = useSelector((state) =>state.single.status)

  useEffect(()=>{
    dispatch(fetchpokemon(id))
  },[])
  return (
    <div>PokemonPage</div>
  )
}

export default PokemonPage