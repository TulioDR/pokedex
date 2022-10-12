import Image from "next/image";
import { motion } from "framer-motion";
import { useRouter } from "next/router";
import threeDigits from "../utils/threeDigits";
import { PokemonCardModel } from "../Model/PokemonModel";

import pokeball from "../assets/images/pokeball.png";

type Props = {
   pokemon: PokemonCardModel;
   setSelectedId: React.Dispatch<React.SetStateAction<string | null>>;
};

const cardAnimation = {
   initial: {
      y: 0,
   },
   animate: {
      // y: "100%",
      // transition: { duration: 0.3, delay: 0.3 },
   },
};

export default function Card({ pokemon, setSelectedId }: Props) {
   const { name } = pokemon;

   const router = useRouter();

   const execute = () => {
      setSelectedId(pokemon.img);
      // router.push(`/${pokemon.id}`);
   };

   return (
      <article
         onClick={execute}
         className="cursor-pointer relative w-full h-full flex flex-col overflow-hidden duration-300 hover:-translate-y-2"
      >
         <div className="w-full bg-primary rounded-lg flex-1 mt-4">
            <motion.div
               layoutId={pokemon.img}
               className="bg-white shadow-xl rounded-xl mx-4 -mt-4 aspect-square relative"
            >
               <Image src={pokemon.img} layout="fill" priority />
            </motion.div>

            <div className="w-ful p-3 text-white">
               <div className="text-gray-400 text-sm">
                  N.º{threeDigits(pokemon.id)}
               </div>
               <div className="capitalize truncate text-lg">{name}</div>
               <div className="grid grid-cols-2 gap-3 text-white mt-1">
                  {pokemon.types.map(({ slot, type }) => (
                     <div
                        key={slot}
                        className={`rounded-md capitalize text-center bg-orange-700 py-1`}
                     >
                        {type.name}
                     </div>
                  ))}
               </div>
            </div>
         </div>
         {/* <motion.div
            variants={cardAnimation}
            initial="initial"
            animate="animate"
            className="bg-tertiary w-full h-full absolute top-0 left-0 z-10 flex items-center justify-center rounded-lg"
         >
            <div className="relative w-3/5">
               <Image src={pokeball} priority />
            </div>
         </motion.div> */}
      </article>
   );
}
