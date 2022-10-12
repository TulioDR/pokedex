import Head from "next/head";
import Stats from "../components/Pokemon/Stats";
import PokeImg from "../components/Pokemon/PokeImg";
import Types from "../components/Pokemon/Types";
import Description from "../components/Pokemon/Description";
import Species from "../components/Pokemon/Species";

import Container from "../components/Container";
import Details from "../components/Pokemon/Details/Details";
import PokemonModel from "../Model/PokemonModel";
import Evolution from "../components/Pokemon/Evolution/Evolution";

type Props = {
   pokemon: PokemonModel;
};

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
const getID = (str: string) => str.substring(42).slice(0, -1);
const getEvolutionChain = async (data: any) => {
   let array = [];
   const names = [getID(data.species.url)];
   if (data.evolves_to[0]) {
      names.push(getID(data.evolves_to[0].species.url));
      if (data.evolves_to[0].evolves_to[0]) {
         names.push(getID(data.evolves_to[0].evolves_to[0].species.url));
      }
   }
   for (const id of names) {
      const url = `https://pokeapi.co/api/v2/pokemon/${id}/`;
      const data = await getData(url);
      // aqui debo meter los valores como en las cartas de index
      array.push(data);
   }
   return array;
};

export async function getServerSideProps({ query }: any) {
   const mainLink = `https://pokeapi.co/api/v2/pokemon/${query.pokemon}`;
   const mainData = await getData(mainLink);
   const species = await getData(mainData.species.url);
   const evolution = await getData(species.evolution_chain.url);
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
      evolution: await getEvolutionChain(evolution.chain),
   };
   return {
      props: { pokemon },
   };
}

export default function Pokemon({ pokemon }: Props) {
   // console.log(pokemon.evolution);
   return (
      <>
         <Head>
            <title>{pokemon.name.toUpperCase()}</title>
            <meta name="description" content="Generated by create next app" />
            <link rel="icon" href="/favicon.ico" />
         </Head>
         <Container>
            <div className="bg-gray-200 p-5 sm:p-7">
               <div className="grid sm:grid-cols-2 gap-5 w-full">
                  <PokeImg image={pokemon.image} />
                  <div className="row-span-2 flex flex-col space-y-5">
                     <Description description={pokemon.description} />
                     <Details details={pokemon.details} />
                     <Types types={pokemon.types} />
                     <Species species={pokemon.species} />
                  </div>
                  <Stats stats={pokemon.stats} />
                  <div className="sm:col-span-2">
                     <Evolution evolution={pokemon.evolution} />
                  </div>
               </div>
            </div>
         </Container>
      </>
   );
}
