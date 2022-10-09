import { AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";
import Ability from "./Ability";
import Detail from "./Detail";

type Props = {
   properties: {
      height: number;
      weight: number;
      gender: number;
      generation: string;
      abilities: {
         name: string;
         description: string;
      };
   };
};

export default function Details({ properties }: Props) {
   const { height, weight, gender, generation, abilities } = properties;

   const [abilitiesInfo, setAbilitiesInfo] = useState<any>(null);

   const getGender = (gender: number): JSX.Element | "Unknown" => {
      if (gender === 0) return <span className="material-icons">male</span>;
      if (1 <= gender && gender <= 7)
         return (
            <div className="flex items-center">
               <span className="material-icons">male</span>
               <span className="material-icons">female</span>
            </div>
         );

      if (gender === 8) return <span className="material-icons">male</span>;
      return "Unknown";
   };

   const getAbilities = (abilities: any): JSX.Element => {
      return abilities.map((ab: any) => (
         <div key={ab.name} className="flex items-center space-x-2">
            <span className="capitalize">{ab.name}</span>
            <button
               onClick={() => setAbilitiesInfo(ab)}
               className="flex items-center justify-center"
            >
               <span className="material-icons">info</span>
            </button>
         </div>
      ));
   };

   useEffect(() => {}, []);
   return (
      <div className="bg-gradient-to-br from-blue-500 to-blue-700 rounded-lg shadow-lg text-white overflow-hidden p-4 grid grid-cols-2 gap-3 relative">
         <Detail label="Height" info={`${height / 10}m`} />
         <Detail label="Weight" info={`${weight / 10}Kg`} />
         <Detail label="Specie's Gender" info={getGender(gender)} />
         <Detail label="Abilities" info={getAbilities(abilities)} abilities />
         <Detail label="Generation" info={generation} />
         <AnimatePresence>
            {abilitiesInfo && (
               <Ability
                  ability={abilitiesInfo}
                  setAbilitiesInfo={setAbilitiesInfo}
               />
            )}
         </AnimatePresence>
      </div>
   );
}
