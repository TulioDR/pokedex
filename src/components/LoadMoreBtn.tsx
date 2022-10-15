import { motion } from "framer-motion";
import usePokemonsContext from "../context/PokemonsContext";

type Props = {};

export default function LoadMoreBtn({}: Props) {
   const { nextPage } = usePokemonsContext();
   return (
      <motion.button
         onTap={nextPage}
         whileTap={{ scale: 0.9 }}
         className="rounded-lg bg-tertiary py-3 px-5 mx-auto text-white mt-7 block shadow-lg"
      >
         Load More
      </motion.button>
   );
}
