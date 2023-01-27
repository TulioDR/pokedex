import { useRouter } from "next/router";

import CardID from "./CardID";
import CardName from "./CardName";
import { PokemonCardModel } from "../../Model/PokemonModel";
import CardImg from "./CardImg";
import CardTypes from "./CardTypes";
import CardContainer from "./CardContainer";

type Props = {
   pokemon: PokemonCardModel;
};

export default function Card({ pokemon }: Props) {
   const router = useRouter();
   const execute = () => {
      router.push(`/${pokemon.id}`, undefined, { scroll: false });
   };

   return (
      <CardContainer onClick={execute}>
         <div className="w-full bg-primary rounded-lg flex-1 mt-4">
            <CardImg img={pokemon.img} alt={pokemon.name} />
            <div className="w-ful p-3 text-white">
               <CardID id={pokemon.id} />
               <CardName>{pokemon.name}</CardName>
               <CardTypes types={pokemon.types} />
            </div>
         </div>
      </CardContainer>
   );
}
