import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from '../pages/Home'
import PokemonList from '../pages/PokemonList'
import Myteam from '../pages/Myteam'

const MainRoutes = () => {
  return (
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/pokemon' element={<PokemonList/>}/>
      <Route path='/myteam' element={<Myteam/>}/>
    </Routes>
  )
}

export default MainRoutes