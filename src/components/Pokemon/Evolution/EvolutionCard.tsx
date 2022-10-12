import React from "react";

type Props = {
   card: any;
};

export default function EvolutionCard({ card }: Props) {
   return (
      <div className="w-40 hover:-translate-y-1 duration-200 cursor-pointer">
         <img
            src={card.sprites.other["official-artwork"].front_default}
            className="w-full bg-gray-light p-3 block rounded-full border-white border-4 shadow-2xl"
            alt={card.name}
         />
         <div className="p-2">
            <div className="text-center mb-2">
               <span className="capitalize text-white mr-2">{card.name}</span>
            </div>
            <div className="grid grid-cols-2 gap-2 text-white">
               {card.types.map((type: any) => (
                  <div
                     key={type.slot}
                     className={`rounded-md capitalize text-center bg-${type.type.name}`}
                  >
                     {type.type.name}
                  </div>
               ))}
            </div>
         </div>
      </div>
   );
}
