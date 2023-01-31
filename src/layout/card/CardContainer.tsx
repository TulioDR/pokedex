import { motion } from "framer-motion";
import RenderAnimationContainer from "../../animations/RenderAnimationContainer";

type Props = {
   onClick: () => void;
   children: React.ReactNode;
};

export default function CardContainer({ onClick, children }: Props) {
   return (
      <motion.article
         drag={true}
         whileDrag={{ zIndex: 50 }}
         dragConstraints={{ left: 0, right: 0, top: 0, bottom: 0 }}
         whileHover={{ y: -8, transition: { duration: 0.3 } }}
         onClick={onClick}
         className="cursor-pointer relative w-full overflow-hidden"
      >
         <RenderAnimationContainer>{children}</RenderAnimationContainer>
      </motion.article>
   );
}
