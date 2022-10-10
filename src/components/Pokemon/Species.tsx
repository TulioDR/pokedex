import { SpeciesModel } from "../../Model/PokemonModel";
import SectionContainer from "./Section/SectionContainer";
import SectionTitle from "./Section/SectionTitle";

type Props = {
   species: SpeciesModel;
};

export default function Species({ species }: Props) {
   return (
      <SectionContainer species>
         <SectionTitle>Species</SectionTitle>
         {(
            <div className="grid grid-cols-2 gap-4">
               {species.map((group: any) => (
                  <div
                     key={group.name}
                     className={`text-black bg-gray-200 text-center rounded-md py-1 capitalize`}
                  >
                     {group.name}
                  </div>
               ))}
            </div>
         ) || (
            <div className={`text-white text-center rounded-full py-1`}>
               This pokemon don't belong to any known species
            </div>
         )}
      </SectionContainer>
   );
}
