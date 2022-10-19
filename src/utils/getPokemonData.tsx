import PokemonModel from "../Model/PokemonModel";
import fetchData from "./fetchData";
import { getEvolutionChain } from "./getEvolutionChain";
import setPokemonCard from "./setPokemonCard";

interface abilitiesModel {
   name: string;
   description: string;
}

const getAbilities = async (abilities: any[]) => {
   const abilitiesArray: abilitiesModel[] = await Promise.all(
      abilities.map(async (ab) => {
         const name = ab.ability.name;
         const data = await fetchData(ab.ability.url);
         const description = data.flavor_text_entries.filter(
            (pok: any) => pok.language.name === "en"
         )[0].flavor_text;
         return { name, description };
      })
   );
   return abilitiesArray;
};

export async function getPokemonData(mainData: any) {
   const species = await fetchData(mainData.species.url);
   const evolution = (await getEvolutionChain(species.evolution_chain)) || {
      firstStage: setPokemonCard(mainData),
   };
   const pokemon: PokemonModel = {
      name: mainData.name,
      image: mainData.sprites.other["official-artwork"].front_default,
      stats: mainData.stats,
      types: mainData.types,
      description: species.flavor_text_entries.filter(
         (pok: any) => pok.language.name === "en"
      )[0].flavor_text,
      details: {
         height: mainData.height,
         weight: mainData.weight,
         gender: species.gender_rate,
         generation: species.generation.name.substring(11).toUpperCase(),
         abilities: await getAbilities(mainData.abilities),
      },
      species: species.egg_groups,
      evolution: evolution,
   };
   return { pokemon };
}
