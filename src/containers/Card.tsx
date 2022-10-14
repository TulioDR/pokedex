import { useRouter } from "next/router";
import threeDigits from "../utils/threeDigits";
import { PokemonCardModel } from "../Model/PokemonModel";

import CardImg from "../components/Card/CardImg";
import CardTypes from "../components/Card/CardTypes";
import CardContainer from "../components/Card/CardContainer";
import ExitCardAnimation from "../animations/ExitCardAnimation";
import RevealCardAnimation from "../animations/RevealCardAnimation";

type Props = {
   pokemon: PokemonCardModel;
   setSelectedId: React.Dispatch<React.SetStateAction<string | null>>;
};

export default function Card({ pokemon, setSelectedId }: Props) {
   const router = useRouter();

   const execute = () => {
      // setSelectedId(pokemon.img);
      router.push(`/${pokemon.id}`, undefined, { scroll: false });
      // setTimeout(() => {
      //    setSelectedId(null);
      // }, 3000);
   };

   return (
      <CardContainer onClick={execute}>
         <div className="w-full bg-primary rounded-lg flex-1 mt-4">
            <CardImg img={pokemon.img} alt={pokemon.name} />
            <div className="w-ful p-3 text-white">
               <div className="text-gray-400 text-sm">
                  N.º{threeDigits(pokemon.id)}
               </div>
               <div className="capitalize truncate text-lg">{pokemon.name}</div>
               <CardTypes types={pokemon.types} />
            </div>
         </div>
         <ExitCardAnimation />
         <RevealCardAnimation />
      </CardContainer>
   );
}
