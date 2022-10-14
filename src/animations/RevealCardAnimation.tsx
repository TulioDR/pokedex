import { motion } from "framer-motion";

type Props = {};

const revealAnimation1 = {
   initial: { x: 0 },
   animate: {
      x: "100%",
      transition: {
         duration: 0.5,
         delay: 0.2,
         ease: [0.645, 0.045, 0.355, 1],
      },
   },
};
const revealAnimation2 = {
   initial: { width: 0 },
   animate: {
      width: "100%",
      transition: {
         duration: 0.4,
         delay: 0.2,
         ease: [0.645, 0.045, 0.355, 1],
      },
   },
};

export default function RevealCardAnimation({}: Props) {
   return (
      <motion.div
         variants={revealAnimation1}
         initial="initial"
         animate="animate"
         className="bg-primary z-10 absolute top-0 bottom-0 left-0 w-full h-full"
      >
         <motion.div
            variants={revealAnimation2}
            initial="initial"
            animate="animate"
            className="bg-tertiary h-full"
         ></motion.div>
      </motion.div>
   );
}
