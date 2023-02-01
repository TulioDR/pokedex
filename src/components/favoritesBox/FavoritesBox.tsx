import { motion } from "framer-motion";
import FavoriteCard from "./FavoriteCard";
type Props = {
   isBoxOpen: boolean;
   setMouseInsideBox: React.Dispatch<React.SetStateAction<boolean>>;
   savedCards: any[];
};

export default function FavoritesBox({
   isBoxOpen,
   setMouseInsideBox,
   savedCards,
}: Props) {
   const handleMouseEnter = () => {
      console.log("mouse entered");
      setMouseInsideBox(true);
   };
   const handleMouseLeave = () => {
      console.log("mouse leave");
      setMouseInsideBox(false);
   };
   return (
      <motion.div
         onMouseEnter={handleMouseEnter}
         onMouseLeave={handleMouseLeave}
         className={`flex justify-end`}
      >
         <div
            className={`fixed duration-300 rounded-2xl border-white bg-gray-300 overflow-y-auto pt-8 pb-4 space-y-8 shadow-inner ${
               isBoxOpen ? "w-52 p-3 border-[10px]" : "w-0 border-0"
            }`}
            style={{ height: "calc(100vh - 100px)" }}
         >
            {savedCards.map((pokemon) => (
               <FavoriteCard key={pokemon.id} pokemon={pokemon} />
            ))}
         </div>
      </motion.div>
   );
}
