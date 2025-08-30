import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    
    list: [] 
};

const favoriteSlice = createSlice({
    name: 'favorites',
    initialState,
    
    reducers: {
       
        toggleFavorite: (state, action) => {
            
            const pokemon = action.payload;
            const pokemonId = pokemon.id;

            
            const index = state.list.findIndex(p => p.id === pokemonId);

            if (index === -1) {
                
                state.list.push(pokemon);
            } else {
                
                state.list = state.list.filter(p => p.id !== pokemonId);
            }
        }
    }
});


export const { toggleFavorite } = favoriteSlice.actions;

export default favoriteSlice.reducer;