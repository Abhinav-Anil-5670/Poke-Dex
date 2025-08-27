import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import InfiniteScroll from 'react-infinite-scroll-component';
import { fetchInitialPokemon, fetchMorePokemon } from '../reducers/pokemonSlice'; 
import Card from '../components/Card'
import { Link } from "react-router-dom";



function PokemonList() {
  const dispatch = useDispatch();

  const pokemonList = useSelector((state) => state.pokemon.list);
  const status = useSelector((state) => state.pokemon.status);
  const hasMore = useSelector((state) => state.pokemon.hasMore);

  
  
  useEffect(() => {
    if (status === 'idle') {
      dispatch(fetchInitialPokemon());
    }
  }, [status, dispatch]);

  
  
  const loadMorePokemon = () => {
    dispatch(fetchMorePokemon());
  };


  if (status === 'loading') {
    return <p className="loading-message">Loading Pokémon...</p>;
  }

  return (
    <div className="App">
      
      
      
      <InfiniteScroll
        dataLength={pokemonList.length} 
        next={loadMorePokemon}
        hasMore={hasMore} 
        loader={<h4 className="loading-message">Loading more Pokémon...</h4>} 
        endMessage={
          <p style={{ textAlign: 'center' }}>
            <b>You've caught them all!</b>
          </p>
        }
      >
        
        <div className='flex flex-wrap justify-center items-center gap-5 mt-5'>
          {pokemonList.map((pokemon)=>(
            <Link to={`/pokemon/${pokemon.id}`} key={pokemon.id}>
              <Card pokemon={pokemon} key={pokemon.id}/>
            </Link>
          ))}
        </div>
        
      </InfiniteScroll>
    </div>
  );
}

export default PokemonList;