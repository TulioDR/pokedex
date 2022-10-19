import { motion } from "framer-motion";
import RenderAnimationContainer from "../../animations/RenderAnimationContainer";

type Props = {
   onClick: any;
   children: React.ReactNode;
};

export default function CardContainer({ onClick, children }: Props) {
   return (
      <motion.article
         whileHover={{ y: -8, transition: { duration: 0.3 } }}
         onClick={onClick}
         className="cursor-pointer relative w-full h-full overflow-hidden"
      >
         <RenderAnimationContainer>
            <motion.div className="flex flex-col relative">
               {children}
            </motion.div>
         </RenderAnimationContainer>
      </motion.article>
   );
}
