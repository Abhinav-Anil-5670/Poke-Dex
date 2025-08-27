import { configureStore } from "@reduxjs/toolkit";
import pokemonSlice from '../reducers/pokemonSlice'
import singleSlice  from '../reducers/singleSlice'

export const store = configureStore({
    reducer:{
        pokemon : pokemonSlice,
        single : singleSlice
    }
})