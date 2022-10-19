import { motion } from "framer-motion";

type Props = { exit?: boolean };

const revealAnimation = {
   initial: { x: 0 },
   animate: {
      x: "101%",
      transition: {
         duration: 0.2,
         ease: [0.645, 0.045, 0.355, 1],
      },
   },
   exit: { opacity: 0 },
};

const exitAnimation = {
   initial: { x: "-101%" },
   animate: { x: "-101%" },
   exit: {
      x: 0,
      transition: {
         duration: 0.2,
         ease: [0.645, 0.045, 0.355, 1],
      },
   },
};

export default function RenderAnimation({ exit }: Props) {
   return (
      <motion.div
         variants={exit ? exitAnimation : revealAnimation}
         className="bg-primary absolute z-10 top-0 left-0 w-full h-full"
      ></motion.div>
   );
}
