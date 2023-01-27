import { motion, useInView } from "framer-motion";
import { useEffect, useRef } from "react";
import RenderAnimationContainer from "../../animations/RenderAnimationContainer";

type Props = {
   onClick: any;
   children: React.ReactNode;
};

export default function CardContainer({ onClick, children }: Props) {
   const cardRef = useRef<HTMLDivElement>(null);
   const isInView = useInView(cardRef);
   useEffect(() => {
      if (isInView) console.log("is in view");
   }, [isInView]);

   return (
      <motion.article
         ref={cardRef}
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
