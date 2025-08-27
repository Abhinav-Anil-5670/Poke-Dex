export const parseEvolutionChain = (chainObject) => {
  const evolutionChain = [];
  let currentPokemon = chainObject;
  while (currentPokemon) {
    const name = currentPokemon.species.name;
    const urlParts = currentPokemon.species.url.split('/');
    const id = urlParts[urlParts.length - 2];
    evolutionChain.push({ name, id });
    currentPokemon = currentPokemon.evolves_to[0];
  }
  return evolutionChain;
};

