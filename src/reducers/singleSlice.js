import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { pokeClient } from "../api/api";

const initialState ={
    status : "idle",
    list : [],
    morelist : [],
    evolist : []
}

export const fetchpokemon = createAsyncThunk('pokemon/fetchpokemon',
    async (id) =>{
        const {data} = await pokeClient.get(`/pokemon/${id}`)
        return data
    }
)

export const fetchpokemonspecies = createAsyncThunk('pokemon/fetchpokemonspecies',
    async (id) =>{
        const {data} = await pokeClient.get(`/pokemon-species/${id}`)
        return data
    }
)

export const fetchpokemonevolution = createAsyncThunk('pokemon/fetchpokemonevolution',
    async (id) =>{
        const {data} = await pokeClient.get(`/evolution-chain/${id}/`)
        return data
    }
)


const singleSlice = createSlice({
    name : "single",
    initialState,
    extraReducers: (builder) =>{
        builder
        .addCase(fetchpokemon.pending,(state)=>{
            state.status = "loading"

        })

        .addCase(fetchpokemon.fulfilled,(state,aciton)=>{
            state.status = "succeeded"
            state.list = aciton.payload
        })

        .addCase(fetchpokemon.rejected,(state)=>{
            state.status = "failed"
        })




        .addCase(fetchpokemonspecies.pending,(state)=>{
            state.status = "loading"

        })

        .addCase(fetchpokemonspecies.fulfilled,(state,aciton)=>{
            state.status = "succeeded"
            state.morelist = aciton.payload
        })

        .addCase(fetchpokemonspecies.rejected,(state)=>{
            state.status = "failed"
        })



        .addCase(fetchpokemonevolution.pending,(state)=>{
            state.status = "loading"

        })

        .addCase(fetchpokemonevolution.fulfilled,(state,aciton)=>{
            state.status = "succeeded"
            state.evolist = aciton.payload
        })

        .addCase(fetchpokemonevolution.rejected,(state)=>{
            state.status = "failed"
        })
    }
})

export default singleSlice.reducer