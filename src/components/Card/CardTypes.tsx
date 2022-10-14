import React from "react";
import { TypesModel } from "../../Model/PokemonModel";

type Props = {
   types: TypesModel;
};

export default function CardTypes({ types }: Props) {
   return (
      <div className="grid grid-cols-2 gap-3 text-white">
         {types.map(({ slot, type }) => (
            <div
               key={slot}
               className={`rounded-md capitalize text-center bg-orange-700 py-1`}
            >
               {type.name}
            </div>
         ))}
      </div>
   );
}
