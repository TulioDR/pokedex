import React from "react";
import LoadMoreBtn from "../components/LoadMoreBtn";
import useDisplayedPokemons from "../hooks/useDisplayedPokemons";
import Card from "../layout/card/Card";
type Props = {
   isBoxOpen: boolean;
   mouseInsideBox: boolean;
   setSavedCards: React.Dispatch<React.SetStateAction<any[]>>;
   savedCards: any[];
};

export default function Cards({
   isBoxOpen,
   mouseInsideBox,
   setSavedCards,
   savedCards,
}: Props) {
   const { displayed, nextPage, showBtn, isLoading } = useDisplayedPokemons();
   return (
      <>
         <div
            className={`w-max grid gap-5 md:gap-7 ${
               isBoxOpen
                  ? "sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4"
                  : "sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5"
            }`}
         >
            {displayed.map((pokemon) => (
               <Card
                  key={pokemon.id}
                  pokemon={pokemon}
                  isBoxOpen={isBoxOpen}
                  mouseInsideBox={mouseInsideBox}
                  savedCards={savedCards}
                  setSavedCards={setSavedCards}
               />
            ))}
         </div>
         {showBtn && <LoadMoreBtn onClick={nextPage} isLoading={isLoading} />}
      </>
   );
}
