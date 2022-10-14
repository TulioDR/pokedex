import { SpeciesModel, TypesModel } from "../../../Model/PokemonModel";

type Props = {
   types: TypesModel | SpeciesModel;
   species?: boolean;
};

export default function SectionTypes({ types, species }: Props) {
   const noSpeciesMessage: string =
      "This pokemon doesn't belong to any known species";
   return (
      <div className="grid grid-cols-2 gap-5">
         {types.map((type: any, index: number) => (
            <div
               key={index}
               className={`rounded-md capitalize py-1 text-center ${
                  species ? "bg-white text-black" : "bg-blue-500 text-white"
               }`}
            >
               {species ? type.name : type.type.name}
            </div>
         ))}
         {types.length === 0 && (
            <div className="text-white text-center py-1">
               {noSpeciesMessage}
            </div>
         )}
      </div>
   );
}
