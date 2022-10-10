import { motion } from "framer-motion";
import { StatsModel } from "../../Model/PokemonModel";
import SectionContainer from "./Section/SectionContainer";

type Props = {
   stats: StatsModel;
};

export default function Stats({ stats }: Props) {
   return (
      <SectionContainer>
         <h1 className="text-white text-xl ml-4">Stats</h1>
         <div className="flex flex-col space-y-2">
            {stats.map((stat, index) => (
               <div className="flex space-x-3" key={index}>
                  <div className="w-1/5 text-xs h-9 text-white flex text-center justify-center items-center">
                     {stat.stat.name}
                  </div>
                  <div className="w-4/5 border-4 border-white bg-white rounded-full h-9 col-span-4 overflow-hidden">
                     <motion.div
                        initial={{ width: 0 }}
                        animate={{ width: `${(stat.base_stat * 100) / 255}%` }}
                        className="bg-blue-500 h-full"
                     ></motion.div>
                  </div>
               </div>
            ))}
         </div>
      </SectionContainer>
   );
}
