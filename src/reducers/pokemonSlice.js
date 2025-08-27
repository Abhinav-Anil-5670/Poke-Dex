import { createSlice,createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { pokeClient } from "../api/api";

const POKEMON_PER_PAGE = 20

//Async Thunks

//Fetch Initial Pokemon

export const fetchInitialPokemon = createAsyncThunk('pokemon/fetchInitial',
    async ()=>{
        const listResponse = await pokeClient.get(`/pokemon?limit=${POKEMON_PER_PAGE}&offset=0`)
        const pokemonList = listResponse.data.results

        const detailPromise = pokemonList.map(pokemon => axios.get(pokemon.url))
        const detailResponses = await Promise.all(detailPromise)

        const fullPokemonData = detailResponses.map(response =>response.data)

        return fullPokemonData
    }
)

//Fetch More Pokemon

export const fetchMorePokemon = createAsyncThunk('pokemon/fetchMore',
    async(_,{getState})=>{
        const state = getState()
        const currentOffset = state.pokemon.offset

        const listResponse = await pokeClient.get(`/pokemon?limit=${POKEMON_PER_PAGE}&offset=${currentOffset}`)
        const pokemonList = listResponse.data.results
        if (pokemonList.length === 0) {
            return [];
        }

        const detailPromise = pokemonList.map(pokemon => axios.get(pokemon.url))
        const detailResponses = await Promise.all(detailPromise)

        const fullPokemonData = detailResponses.map(response => response.data)

        return fullPokemonData
    }
)


//The Slice

const initialState = {
    list : [],
    status : "idle",
    offset : 0,
    hasMore : true
}


const pokemonSlice = createSlice({
    name : 'pokemon',
    initialState,
    extraReducers : (builder) =>{

        builder
            //To get initial Pokemon
            .addCase(fetchInitialPokemon.pending,(state)=>{
                state.status = "loading"
            })
            .addCase(fetchInitialPokemon.fulfilled,(state,action)=>{
                state.status = "succeeded"
                state.list = action.payload
                state.offset =POKEMON_PER_PAGE
                state.hasMore = action.payload.length >0
            })
            .addCase(fetchInitialPokemon.rejected,(state)=>{
                state.status = "failed"
            })

            //To get More Pokemon
            .addCase(fetchMorePokemon.pending,(state)=>{
                state.status = 'loadingMore'
            })
            .addCase(fetchMorePokemon.fulfilled,(state,action)=>{
                state.status = "succeeded"
                state.list.push(...action.payload)
                state.offset += POKEMON_PER_PAGE
                state.hasMore = action.payload.length >0
            })
            .addCase(fetchMorePokemon.rejected,(state)=>{
                state.status = "failed"
            })

    }
})


export default pokemonSlice.reducer

