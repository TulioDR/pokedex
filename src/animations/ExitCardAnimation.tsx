import { motion } from "framer-motion";

type Props = {};

const exitAnimation1 = {
   initial: { x: "-100%" },
   exit: {
      x: 0,
      transition: {
         duration: 0.2,
         ease: [0.645, 0.045, 0.355, 1],
      },
   },
};
const exitAnimation2 = {
   initial: { width: 0 },
   exit: {
      width: "100%",
      transition: {
         duration: 0.6,
         ease: [0.645, 0.045, 0.355, 1],
      },
   },
};
export default function ExitCardAnimation({}: Props) {
   return (
      <motion.div
         variants={exitAnimation1}
         initial="initial"
         exit="exit"
         className="bg-primary absolute z-10 top-0 left-0 w-full h-full"
      >
         <motion.div
            variants={exitAnimation2}
            initial="initial"
            exit="exit"
            className="bg-tertiary h-full"
         ></motion.div>
      </motion.div>
   );
}
