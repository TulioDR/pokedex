import { motion, useAnimationControls } from "framer-motion";
import { useState } from "react";
import RenderAnimationContainer from "../../animations/RenderAnimationContainer";
import { PokemonCardModel } from "../../Model/PokemonModel";

type Props = {
   pokemon: PokemonCardModel;
   onClick: () => void;
   mouseInsideBox: boolean;
   children: React.ReactNode;
   setSavedCards: React.Dispatch<React.SetStateAction<any[]>>;
   isBoxOpen: boolean;
   isSaved: boolean;
};

export default function CardContainer({
   isSaved,
   onClick,
   mouseInsideBox,
   children,
   setSavedCards,
   pokemon,
   isBoxOpen,
}: Props) {
   const [isDragging, setIsDragging] = useState<boolean>(false);

   const controls = useAnimationControls();

   const handleDragStart = () => {
      console.log("drag started");
      controls.start({
         zIndex: 50,
      });
      setIsDragging(true);
   };
   const handleDragEnd = () => {
      setIsDragging(false);
      controls.start({
         x: 0,
         y: 0,
      });
      if (mouseInsideBox) {
         setSavedCards((current) => [pokemon, ...current]);
      }
   };
   const onAnimationComplete = (definition: any) => {
      const { x, y } = definition;
      if (x === 0 && y === 0) {
         controls.start({
            zIndex: 0,
         });
      }
   };
   return (
      <motion.article
         layout
         drag={isBoxOpen && !isSaved}
         layoutId={pokemon.name}
         onDragStart={handleDragStart}
         onDragEnd={handleDragEnd}
         onAnimationComplete={onAnimationComplete}
         whileHover={{ y: -8, transition: { duration: 0.3 } }}
         animate={controls}
         onClick={isBoxOpen ? undefined : onClick}
         className={`cursor-pointer relative w-full sm:w-52 overflow-hidden ${
            isDragging ? "pointer-events-none" : ""
         }`}
      >
         <RenderAnimationContainer>{children}</RenderAnimationContainer>
      </motion.article>
   );
}
