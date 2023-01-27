import type { NextPage } from "next";
import Head from "next/head";

import Select from "../components/Select/Select";
import ShuffleBtn from "../components/ShuffleBtn";
import LoadMoreBtn from "../components/LoadMoreBtn";

import useDisplayedPokemons from "../hooks/useDisplayedPokemons";
import Card from "../layout/card/Card";

const Home: NextPage = () => {
   const { displayed, getRandomPokemons, nextPage, showBtn, isLoading } =
      useDisplayedPokemons();

   // useEffect(() => {
   //    window.scrollTo({ top: 0 });
   // }, []);

   return (
      <>
         <Head>
            <title>Pokédex</title>
            <meta
               name="description"
               content="Learn about you favorite Pokémon!"
            />
            <link rel="icon" href="/favicon.ico" />
         </Head>
         <div className="w-full">
            <div className="grid md:grid-cols-2 gap-5 md:gap-7 mb-7">
               <ShuffleBtn onClick={getRandomPokemons} />
               <Select />
            </div>
            <div className="w-full grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 md:gap-7">
               {displayed.map((pokemon) => (
                  <Card pokemon={pokemon} key={pokemon.id} />
               ))}
            </div>
            {showBtn && (
               <LoadMoreBtn onClick={nextPage} isLoading={isLoading} />
            )}
         </div>
      </>
   );
};

export default Home;
