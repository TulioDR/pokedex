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
               className={`rounded-md capitalize bg-fire text-center ${type.name} py-1 shadow-lg`}
            >
               {type.name}
            </div>
         ))}
      </div>
   );
}
