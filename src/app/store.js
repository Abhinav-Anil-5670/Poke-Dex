import { configureStore } from "@reduxjs/toolkit";
import pokemonSlice from './reducers/pokemonSlice'

export const store = configureStore({
    reducer:{
        pokemon : pokemonSlice
    }
})