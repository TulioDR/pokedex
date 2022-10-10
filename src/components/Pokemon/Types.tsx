import { TypesModel } from "../../Model/PokemonModel";
import SectionContainer from "./Section/SectionContainer";
import SectionTitle from "./Section/SectionTitle";

type Props = {
   types: TypesModel;
};

export default function Types({ types }: Props) {
   return (
      <SectionContainer>
         <SectionTitle>Type</SectionTitle>
         <div className="grid grid-cols-2 gap-2 text-white">
            {types.map((type) => (
               <div
                  key={type.slot}
                  className={`rounded-md capitalize py-1 text-center bg-blue-500`}
               >
                  {type.type.name}
               </div>
            ))}
         </div>
      </SectionContainer>
   );
}
