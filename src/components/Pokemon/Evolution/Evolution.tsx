import { Fragment } from "react";
import SectionContainer from "../Section/SectionContainer";
import SectionTitle from "../Section/SectionTitle";
import Arrow from "./Arrow";

type Props = {};

const arrayList = [1, 2, 3];

export default function Evolution({}: Props) {
   return (
      <SectionContainer>
         <SectionTitle>Evolution</SectionTitle>
         <div className="flex flex-col md:flex-row items-center justify-between space-y-1 md:space-y-0 md:space-x-1 my-5">
            {arrayList.map((item, index) => (
               <Fragment key={index}>
                  {index !== 0 && <Arrow />}
                  <div className="w-40 h-60 rounded-lg bg-gray-300 text-black grid place-content-center">
                     {item}
                  </div>
               </Fragment>
            ))}
         </div>
      </SectionContainer>
   );
}
