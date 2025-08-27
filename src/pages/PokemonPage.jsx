import React, { useEffect ,useState} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { fetchPokemonPageData } from '../reducers/singleSlice';
import { parseEvolutionChain } from '../utils/pokemonHelpers'
import EvolutionChain from './EvolutionChain';
import Card from '../components/Card';

const PokemonPage = () => {
  const { id } = useParams();
  const dispatch = useDispatch();

  const status = useSelector((state) => state.single.status);
  
  const pageData = useSelector((state) => state.single.data);

  const [evolutionChain, setEvolutionChain] = useState([]);

  useEffect(() => {
    
    dispatch(fetchPokemonPageData(id));
  }, [id, dispatch]);

  useEffect(() => {
    if (pageData) {
      const parsedChain = parseEvolutionChain(pageData.evolution.chain);
      setEvolutionChain(parsedChain);
    }
  }, [pageData]);

  if (status === 'loading' || !pageData) {
    return <p className="loading-message">Loading Pokémon...</p>;
  }
  
  
  const { details, species, evolution } = pageData;

  return (
    <div class="max-w-7xl mx-auto mt-8">

       
        <div class="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-6">

            
            <div class="lg:col-span-1 placeholder-box min-h-[300px]">
                
                <Card pokemon={details}/>
            </div>

            
            <div class="lg:col-span-2 placeholder-box min-h-[300px]">
                <h1 class="text-2xl font-bold">2. Pokémon Graph</h1>
                <p>(Your stats graph component goes here)</p>
            </div>

        </div>

        
        <div class="placeholder-box mb-6 min-h-[200px]">
            <h1 class="text-2xl font-bold">3. Physical & Lore Section</h1>
            <p>(Height, Weight, Abilities, Pokédex Entry)</p>
        </div>

        
        <div class="placeholder-box min-h-[200px]">
            <h1 class="text-2xl font-bold">4. Evolution & Forms</h1>
            {<EvolutionChain chain={evolutionChain} /> }
        </div>
        

    </div>
      
      
    
  );
};

export default PokemonPage;