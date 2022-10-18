import Image from "next/image";
import React from "react";
import { PokemonCardModel } from "../../../Model/PokemonModel";
import CardTypes from "../../Card/CardTypes";

type Props = {
   card: PokemonCardModel;
};

export default function EvolutionCard({ card }: Props) {
   return (
      <div className="w-40 hover:-translate-y-1 duration-200 cursor-pointer">
         <div className="aspect-square w-full relative p-3 rounded-full border-white border-4 shadow-2xl">
            <Image src={card.img} alt={card.name} layout="fill" />
         </div>
         <div className="p-2">
            <div className="text-center mb-2">
               <span className="capitalize text-white mr-2">{card.name}</span>
            </div>
            <CardTypes types={card.types} />
         </div>
      </div>
   );
}
