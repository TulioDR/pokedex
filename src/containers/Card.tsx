import Image from "next/image";
import { motion } from "framer-motion";
import { useRouter } from "next/router";
import threeDigits from "../utils/threeDigits";

interface PokemonCard {
   name: string;
   img: string;
   id: number;
   types: {
      slot: number;
      name: string;
   }[];
}

type Props = {
   pokemon: PokemonCard;
   setSelectedId: any;
};

export default function Card({ pokemon, setSelectedId }: Props) {
   const { name } = pokemon;

   const router = useRouter();

   const execute = () => {
      setSelectedId(pokemon.img);
      router.push(`/${pokemon.id}`);
   };

   return (
      <motion.article
         initial={{
            y: 40,
            opacity: 0,
         }}
         animate={{
            y: 0,
            opacity: 1,
            transition: { duration: 0.3 },
         }}
         exit={{
            y: 40,
            opacity: 0,
            transition: { duration: 0.3 },
         }}
         onClick={execute}
         className="shadow-lg rounded-lg overflow-hidden cursor-pointer"
      >
         <motion.div
            layoutId={pokemon.img}
            className="bg-white aspect-square relative"
         >
            <Image src={pokemon.img} layout="fill" priority />
         </motion.div>
         <div className="bg-gray-700 p-3 text-white flex flex-col space-y-1">
            <div className="text-gray-400 text-sm">
               N.º{threeDigits(pokemon.id)}
            </div>
            <div className="capitalize">{name}</div>
            <div className="grid grid-cols-2 gap-3 text-white">
               {pokemon.types.map(({ slot, name }) => (
                  <div
                     key={slot}
                     className={`rounded-md capitalize text-center bg-orange-900 py-1`}
                  >
                     {name}
                  </div>
               ))}
            </div>
         </div>
      </motion.article>
   );
}
