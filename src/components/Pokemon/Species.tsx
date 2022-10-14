import { SpeciesModel } from "../../Model/PokemonModel";
import SectionContainer from "./Section/SectionContainer";
import SectionTitle from "./Section/SectionTitle";
import SectionTypes from "./Section/SectionTypes";

type Props = {
   species: SpeciesModel;
};

export default function Species({ species }: Props) {
   return (
      <SectionContainer species>
         <SectionTitle>Species</SectionTitle>
         <SectionTypes types={species} species />
      </SectionContainer>
   );
}
