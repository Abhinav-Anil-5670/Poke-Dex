import React, { useEffect ,useState} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { fetchPokemonPageData } from '../reducers/singleSlice';
import { parseEvolutionChain } from '../utils/pokemonHelpers'
import EvolutionChain from './EvolutionChain';
import Card from '../components/Card';
import Graph from './Graph';
import Attributes from './Attributes';

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

    if(details){
      document.title = `Pokédex | ${details.name.charAt(0).toUpperCase() + details.name.slice(1)}`;
    }

  return (
    <div className="max-w-7xl mx-auto mt-8">

       
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-6">

            
            <div className="lg:col-span-1 placeholder-box min-h-[300px]">
                
                <Card pokemon={details}/>
            </div>

            
            <div className="lg:col-span-2 placeholder-box min-h-[300px]">
                
               <Graph pokemon={details}/>
            </div>

        </div>

        
        <div className="placeholder-box mb-6 min-h-[200px]">
            <div className='flex justify-center items-center'>
              
              <Attributes pokemon={details} species={species}/>
            </div>
            
        </div>

        
        <div className="placeholder-box min-h-[200px]">
          <div className='flex justify-center items-center'>
            <h1 className="text-4xl font-bold">Evolution & Forms</h1>
          </div>
            <EvolutionChain chain={evolutionChain} pokedata={details} />
        </div>
        

    </div>
      
      
    
  );
};

export default PokemonPage;