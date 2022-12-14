import { EvolutionModel } from "../../../Model/PokemonModel";
import SectionContainer from "../Section/SectionContainer";
import SectionTitle from "../Section/SectionTitle";
import Arrow from "./Arrow";
import EvolutionCard from "./EvolutionCard";

type Props = {
   evolution: EvolutionModel;
};

export default function Evolution({ evolution }: Props) {
   return (
      <SectionContainer>
         <SectionTitle>Evolution</SectionTitle>
         {(!evolution.nextStages || !evolution.nextStages.length) && (
            <div className="mb-5">This pokemon does not evolve.</div>
         )}

         <div className="flex items-center justify-center space-x-1">
            <EvolutionCard card={evolution.firstStage} />
            <div className="flex flex-col space-y-1">
               {evolution.nextStages?.map((secPok, index) => (
                  <div key={index} className="flex items-center space-x-1">
                     <Arrow />
                     <EvolutionCard card={secPok.secondStage} />
                     {secPok.thirdStage && (
                        <div className="flex flex-col">
                           {secPok.thirdStage.map((thirdPok) => (
                              <div
                                 key={thirdPok.id}
                                 className="flex space-x-1 items-center"
                              >
                                 <Arrow />
                                 <EvolutionCard card={thirdPok} />
                              </div>
                           ))}
                        </div>
                     )}
                  </div>
               ))}
            </div>
         </div>
      </SectionContainer>
   );
}
