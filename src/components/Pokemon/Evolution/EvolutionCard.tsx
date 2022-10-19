import Image from "next/image";
import { useRouter } from "next/router";
import React from "react";
import { PokemonCardModel } from "../../../Model/PokemonModel";
import threeDigits from "../../../utils/threeDigits";
import CardID from "../../Card/CardID";
import CardName from "../../Card/CardName";
import CardTypes from "../../Card/CardTypes";

type Props = {
   card: PokemonCardModel;
};

export default function EvolutionCard({ card }: Props) {
   const router = useRouter();
   const getPokemon = () => {
      router.push(`/${card.id}`, undefined, { scroll: false });
      window.scrollTo({ top: 0, behavior: "smooth" });
   };

   return (
      <div
         onClick={getPokemon}
         className="w-48 hover:-translate-y-1 duration-200 cursor-pointer bg-gray-300 rounded-lg p-3 shadow-lg text-black"
      >
         <div className="aspect-square w-full relative p-3 rounded-full bg-white shadow-2xl -mt-6">
            <Image src={card.img} alt={card.name} layout="fill" />
         </div>
         <div className="text-black">
            <CardID id={card.id} evolution />
            <CardName>{card.name}</CardName>
            <CardTypes types={card.types} />
         </div>
      </div>
   );
}
