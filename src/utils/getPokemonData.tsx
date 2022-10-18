import PokemonModel from "../Model/PokemonModel";
import { getEvolutionChain } from "./getEvolutionChain";

const getData = async (url: string) => {
   const res = await fetch(url);
   return await res.json();
};
const getAbilities = async (abilities: any) => {
   let newArray: any = [];
   for (const item of abilities) {
      newArray.push({
         name: item.ability.name,
         description: await getData(item.ability.url).then((res) => {
            return res.flavor_text_entries.filter(
               (pok: any) => pok.language.name === "en"
            )[0].flavor_text;
         }),
      });
   }
   return await newArray;
};

export async function getPokemonData(mainData: any) {
   const species = await getData(mainData.species.url);
   const evolution = await getEvolutionChain(species.evolution_chain);
   const pokemon: PokemonModel = {
      name: mainData.name,
      image: {
         smallImg: mainData.sprites.front_default,
         hdImg: mainData.sprites.other["official-artwork"].front_default,
      },
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
      evolution: evolution || {
         firstStage: {
            id: mainData.id,
            name: mainData.name,
            img: mainData.sprites.other["official-artwork"].front_default,
            types: mainData.types,
         },
      },
   };
   return { pokemon };
}
