import Head from "next/head";
import Stats from "../components/Pokemon/Stats";
import PokeImg from "../components/Pokemon/PokeImg";
import Types from "../components/Pokemon/Types";
import Description from "../components/Pokemon/Description";
import Species from "../components/Pokemon/Species";

import Details from "../components/Pokemon/Details/Details";
import Evolution from "../components/Pokemon/Evolution/Evolution";
import { useEffect, useState } from "react";
import { getPokemonData } from "../utils/getPokemonData";
import { GetServerSidePropsContext } from "next";
import Title from "../components/Pokemon/Title";
import PokemonModel from "../Model/PokemonModel";

type Props = {
   url: string;
};

export async function getServerSideProps({ query }: GetServerSidePropsContext) {
   const pokemonId = query.pokemon;
   const url = `https://pokeapi.co/api/v2/pokemon/${pokemonId}`;

   const id = Number(pokemonId);

   if (typeof id !== "number") {
      return { notFound: true };
   }
   if (id < 1 || id > 905) {
      return { notFound: true };
   }
   return {
      props: { url },
   };
}

export default function Pokemon({ url }: Props) {
   const [pokemon, setPokemon] = useState<PokemonModel | null>(null);

   useEffect(() => {
      const getPokemon = async () => {
         const res = await fetch(url);
         const data = await res.json();
         const displayedPokemon = await getPokemonData(data);
         setPokemon(displayedPokemon.pokemon);
      };
      getPokemon();
   }, [url]);

   useEffect(() => {
      window.scrollTo({ top: 0 });
   }, []);

   return (
      <div className="w-full">
         <Head>
            <title>{pokemon?.name.toUpperCase() || "Pokédex"}</title>
            <meta
               name="description"
               content={`Learn more about ${
                  pokemon?.name || "your favorite Pokémon"
               }!`}
            />
            <link rel="icon" href="/favicon.ico" />
         </Head>
         {pokemon && (
            <>
               <Title>{pokemon.name}</Title>
               <div className="grid sm:grid-cols-2 gap-5 w-full">
                  <PokeImg image={pokemon.image!} />
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
            </>
         )}
      </div>
   );
}
