import { Fragment } from "react";
import SectionContainer from "../Section/SectionContainer";
import SectionTitle from "../Section/SectionTitle";
import Arrow from "./Arrow";
import EvolutionCard from "./EvolutionCard";

type Props = {
   evolution: any;
};

const arrayList = [1, 2, 3];

export default function Evolution({ evolution }: Props) {
   console.log(evolution);
   return (
      <SectionContainer>
         <SectionTitle>Evolution</SectionTitle>
         {arrayList.length === 1 && <div>This pokemon doesn't evolve</div>}
         <div className="flex flex-col md:flex-row items-center justify-center space-y-1 md:space-y-0 md:space-x-1 my-5">
            {evolution.map((item: any, index: number) => (
               <Fragment key={index}>
                  {index !== 0 && <Arrow />}
                  <EvolutionCard card={item} />
               </Fragment>
            ))}
         </div>
      </SectionContainer>
   );
}
