import { EvolutionModel } from "../Model/PokemonModel";
import fetchData from "./fetchData";
import setPokemonCard from "./setPokemonCard";

const getData = async (url: string) => {
   const res = await fetch(url);
   return await res.json();
};
const getEvolutionStage = async (url: string) => {
   const id = url.substring(42).slice(0, -1); // get the id from the end of the url
   const data = await fetchData(`https://pokeapi.co/api/v2/pokemon/${id}/`);
   return setPokemonCard(data);
};

export const getEvolutionChain = async (evolutionChain: any) => {
   if (!evolutionChain) return null;
   const { chain } = await getData(evolutionChain.url);
   const stages: EvolutionModel = {
      firstStage: await getEvolutionStage(chain.species.url),
      nextStages: await Promise.all(
         chain.evolves_to.map(async (pok: any) => {
            return {
               secondStage: await getEvolutionStage(pok.species.url),
               thirdStage: await Promise.all(
                  pok.evolves_to.map(async (newPok: any) => {
                     return await getEvolutionStage(newPok.species.url);
                  })
               ),
            };
         })
      ),
   };
   return stages;
};
