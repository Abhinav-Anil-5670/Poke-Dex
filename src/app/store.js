import { configureStore } from "@reduxjs/toolkit";
import pokemonSlice from '../reducers/pokemonSlice'
import singleSlice  from '../reducers/singleSlice'
import favouriteSlice from '../reducers/favouriteSlice'

export const store = configureStore({
    reducer:{
        pokemon : pokemonSlice,
        single : singleSlice,
        favourite : favouriteSlice
    }
})