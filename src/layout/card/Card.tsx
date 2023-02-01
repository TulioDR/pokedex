import { useRouter } from "next/router";

import CardID from "./CardID";
import CardName from "./CardName";
import { PokemonCardModel } from "../../Model/PokemonModel";
import CardImg from "./CardImg";
import CardTypes from "./CardTypes";
import CardContainer from "./CardContainer";
import CardBookmark from "./CardBookmark";
import { useEffect, useState } from "react";

type Props = {
   pokemon: PokemonCardModel;
   mouseInsideBox: boolean;
   savedCards: any[];
   setSavedCards: React.Dispatch<React.SetStateAction<any[]>>;
   isBoxOpen: boolean;
};

export default function Card({
   pokemon,
   mouseInsideBox,
   isBoxOpen,
   savedCards,
   setSavedCards,
}: Props) {
   const router = useRouter();
   const execute = () => {
      router.push(`/${pokemon.id}`, undefined, { scroll: false });
   };

   const [isSaved, setIsSaved] = useState<boolean>(false);
   useEffect(() => {
      const saved = savedCards.some((card) => card.id == pokemon.id);
      setIsSaved(saved);
   }, [savedCards]);

   return (
      <CardContainer
         isSaved={isSaved}
         isBoxOpen={isBoxOpen}
         onClick={execute}
         mouseInsideBox={mouseInsideBox}
         setSavedCards={setSavedCards}
         pokemon={pokemon}
      >
         <div
            className={`w-full shadow-xl rounded-xl flex-1 mt-4 ${pokemon.species.color.name}`}
         >
            <CardImg img={pokemon.img} alt={pokemon.name} />
            <div className="w-ful p-3 text-white">
               <CardID id={pokemon.id} />
               <CardName>{pokemon.name}</CardName>
               <CardTypes types={pokemon.types} />
            </div>
         </div>
         <CardBookmark isBoxOpen={isBoxOpen} isSaved={isSaved} />
      </CardContainer>
   );
}
