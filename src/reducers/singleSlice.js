import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { pokeClient } from "../api/api";


export const fetchPokemonPageData = createAsyncThunk(
  'pokemon/fetchPageData',
  async (id) => {
    
    const pokemonPromise = pokeClient.get(`/pokemon/${id}`);
    const speciesPromise = pokeClient.get(`/pokemon-species/${id}`);

    const [pokemonRes, speciesRes] = await Promise.all([pokemonPromise, speciesPromise]);

    
    const evolutionUrl = speciesRes.data.evolution_chain.url;

    
    const evolutionRes = await axios.get(evolutionUrl);

    
    return {
      details: pokemonRes.data,
      species: speciesRes.data,
      evolution: evolutionRes.data,
    };
  }
);

const initialState = {
  status: "idle",
  data: null,
};

const singleSlice = createSlice({
  name: "single",
  initialState,
  extraReducers: (builder) => {
    builder
      .addCase(fetchPokemonPageData.pending, (state) => {
        state.status = "loading";
        state.data = null;
      })
      .addCase(fetchPokemonPageData.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.data = action.payload; 
      })
      .addCase(fetchPokemonPageData.rejected, (state) => {
        state.status = "failed";
      });
  },
});

export default singleSlice.reducer;