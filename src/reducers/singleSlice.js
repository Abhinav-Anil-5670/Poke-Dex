import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { pokeClient } from "../api/api";

const initialState ={
    status : "idle",
    list : []
}

export const fetchpokemon = createAsyncThunk('pokemon/fetchpokemon',
    async (id) =>{
        const {data} = await pokeClient.get(`/pokemon/${id}`)
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
    }
})

export default singleSlice.reducer