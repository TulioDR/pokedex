import usePokemonsContext from "../context/PokemonsContext";
import { motion } from "framer-motion";

type Props = {};

export default function ShuffleBtn({}: Props) {
   const { getRandomPokemons } = usePokemonsContext();

   return (
      <motion.button
         whileTap={{ scale: 0.9 }}
         onTap={getRandomPokemons}
         className="w-full h-10 bg-secondary space-x-2 flex items-center justify-center text-white rounded-lg"
      >
         <span className="material-icons">shuffle</span>
         <span className="text-lg">Surprise Me!</span>
      </motion.button>
   );
}
