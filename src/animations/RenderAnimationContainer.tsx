import { motion } from "framer-motion";
import RenderAnimation from "./RenderAnimation";

type Props = {
   children: React.ReactNode;
};

export default function RenderAnimationContainer({ children }: Props) {
   const containerAnimation = {
      initial: { x: "-100%" },
      animate: {
         x: 0,
         transition: {
            duration: 0.2,
            delayChildren: 0.2,
            ease: [0.645, 0.045, 0.355, 1],
         },
      },
      exit: {
         x: "100%",
         transition: {
            duration: 0.2,
            delay: 0.2,
            ease: [0.645, 0.045, 0.355, 1],
         },
      },
   };

   return (
      <motion.div
         variants={containerAnimation}
         initial="initial"
         animate="animate"
         exit="exit"
         className="overflow-hidden"
      >
         {children}
         <RenderAnimation />
         <RenderAnimation exit />
      </motion.div>
   );
}
