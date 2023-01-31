import fetchData from "./fetchData";
import setPokemonCard from "./setPokemonCard";

export const getPokemonsCards = async (sourceArray: any[], count: number) => {
   const pokemonsSection = sourceArray.slice(count, count + 20);
   return await Promise.all(
      pokemonsSection.map(async (pokemon) => {
         const pokemonData = await fetchData(pokemon.url);
         const species = await fetchData(pokemonData.species.url);
         pokemonData.species = species;
         return setPokemonCard(pokemonData);
      })
   );
};
