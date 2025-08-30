import { useDispatch,useSelector } from "react-redux";
import { toggleFavorite } from "../reducers/favouriteSlice";

const typeColors = {
  normal: 'bg-gray-400',
  fire: 'bg-red-500',
  water: 'bg-blue-500',
  electric: 'bg-yellow-400',
  grass: 'bg-green-500',
  ice: 'bg-blue-200',
  fighting: 'bg-red-700',
  poison: 'bg-purple-500',
  ground: 'bg-yellow-700',
  flying: 'bg-indigo-300',
  psychic: 'bg-pink-400',
  bug: 'bg-lime-500',
  rock: 'bg-yellow-800',
  ghost: 'bg-indigo-700',
  dragon: 'bg-indigo-900',
  dark: 'bg-gray-800',
  steel: 'bg-gray-500',
  fairy: 'bg-pink-300'
};


const Card = ({pokemon}) => {
  const dispatch = useDispatch()

  const favoritesList = useSelector((state) => state.favourite.list);

  const isFavorite = favoritesList.some(p => p.id === pokemon.id);

  const handleFavoriteClick = (event) => {
    event.preventDefault();
    event.stopPropagation();
    dispatch(toggleFavorite(pokemon));
  };
  
  return pokemon ?  (
    <div className="bg-white rounded-3xl shadow-lg overflow-hidden w-80 font-sans">
      <div className="relative h-48">
        <div className={`absolute top-0 left-0 w-full h-full ${typeColors[pokemon.types[0].type.name]} rounded-b-[100%]`}></div>
        <div className="absolute top-4 right-4 bg-white px-3 py-1 rounded-full text-sm font-semibold">
          HP {pokemon.stats.find(stat => stat.stat.name === "hp")?.base_stat}
        </div>
        <div className="absolute top-4 left-4 bg-white px-3 py-1 rounded-full text-sm font-semibold">
           #{pokemon.id}
        </div>
        <img
          src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${pokemon.id}.png`}
          alt="NO IMAGE"
          className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-4 h-48 w-auto"
          onError={(e) => {
            e.target.onerror = null;
            e.target.src = "https://placehold.co/200x200/png?text=Image+Not+Found";
          }}
        />
      </div>

      <div className="pt-10 pb-6 px-6 text-center">
        <h2 className="text-3xl font-bold mb-2">{pokemon.name.charAt(0).toUpperCase() + pokemon.name.slice(1)} <i onClick={handleFavoriteClick} className={`cursor-pointer ml-2 ${isFavorite ? 'ri-subtract-line text-red-500' : 'ri-add-circle-line text-green-500'}`}></i></h2>
        <div className='flex items-center justify-center gap-2'>
          {pokemon.types.map((type)=>(
            <span key={type.type.name}  className={`inline-block ${typeColors[type.type.name]} text-white text-sm font-semibold px-4 py-1 rounded-full mb-6`}>
          {type.type.name.charAt(0).toUpperCase() + type.type.name.slice(1)}
        </span>
          ))}
        
        </div>

        <div className="flex justify-around">
          <div className="text-center">
            <p className="text-2xl font-bold">{pokemon.stats.find(stat => stat.stat.name === 'attack')?.base_stat}</p>
            <p className="text-gray-500 text-sm">Attack</p>
          </div>
          <div className="text-center">
            <p className="text-2xl font-bold">{pokemon.stats.find(stat => stat.stat.name === "defense")?.base_stat}</p>
            <p className="text-gray-500 text-sm">Defense</p>
          </div>
          <div className="text-center">
            <p className="text-2xl font-bold">{pokemon.stats.find(stat => stat.stat.name === "speed")?.base_stat}</p>
            <p className="text-gray-500 text-sm">Speed</p>
          </div>
          
        </div>
        
      </div>
    </div>
  ) : <h1>Please Enter Name of the Pokemon</h1>
};


export default Card