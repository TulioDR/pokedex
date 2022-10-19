import { useRouter } from "next/router";
import threeDigits from "../utils/threeDigits";
import { PokemonCardModel } from "../Model/PokemonModel";

import CardImg from "../components/Card/CardImg";
import CardTypes from "../components/Card/CardTypes";
import CardContainer from "../components/Card/CardContainer";
import useAnimationContext from "../context/AnimationContext";

type Props = {
   pokemon: PokemonCardModel;
};

export default function Card({ pokemon }: Props) {
   const router = useRouter();

   const { setSelectedId, setSelectedImg, setPokemonId } =
      useAnimationContext();

   const execute = () => {
      setSelectedId(pokemon.img);
      setSelectedImg(pokemon.img);
      setPokemonId(pokemon.id);
      router.push(`/${pokemon.id}`, undefined, { scroll: false });
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
      </CardContainer>
   );
}
