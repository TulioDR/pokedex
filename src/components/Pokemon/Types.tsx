import { TypesModel } from "../../Model/PokemonModel";
import SectionContainer from "./Section/SectionContainer";
import SectionTitle from "./Section/SectionTitle";
import SectionTypes from "./Section/SectionTypes";

type Props = {
   types: TypesModel;
};

export default function Types({ types }: Props) {
   return (
      <SectionContainer>
         <SectionTitle>Type</SectionTitle>
         <SectionTypes types={types} />
      </SectionContainer>
   );
}
