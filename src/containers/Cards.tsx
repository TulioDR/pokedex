import React from "react";
import LoadMoreBtn from "../components/LoadMoreBtn";
import useDisplayedPokemons from "../hooks/useDisplayedPokemons";
import Card from "../layout/card/Card";

export default function Cards() {
   const { displayed, nextPage, showBtn, isLoading } = useDisplayedPokemons();
   return (
      <>
         <div className="w-full grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-5 md:gap-7">
            {displayed.map((pokemon) => (
               <Card pokemon={pokemon} key={pokemon.id} />
            ))}
         </div>
         {showBtn && <LoadMoreBtn onClick={nextPage} isLoading={isLoading} />}
      </>
   );
}
