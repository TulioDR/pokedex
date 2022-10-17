import { Fragment } from "react";
import SectionContainer from "../Section/SectionContainer";
import SectionTitle from "../Section/SectionTitle";
import Arrow from "./Arrow";
import EvolutionCard from "./EvolutionCard";

type Props = {
   evolution: any;
};

export default function Evolution({ evolution }: Props) {
   return (
      <SectionContainer>
         <SectionTitle>Evolution</SectionTitle>
         {(!evolution || evolution.length === 1) && (
            <div>This pokemon does not evolve</div>
         )}
         <div className="flex flex-col md:flex-row items-center justify-center space-y-1 md:space-y-0 md:space-x-1 my-5">
            {evolution?.map((item: any, index: number) => (
               <Fragment key={index}>
                  {index !== 0 && <Arrow />}
                  <EvolutionCard card={item} />
               </Fragment>
            ))}
         </div>
      </SectionContainer>
   );
}
