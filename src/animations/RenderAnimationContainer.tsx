import { motion, useAnimation } from "framer-motion";

type Props = {
   children: React.ReactNode;
};

export default function RenderAnimationContainer({ children }: Props) {
   const duration = 0.3;

   const innerCard = {
      animate: { x: "105%", transition: { duration } },
   };
   const controls = useAnimation();
   const onAnimationComplete = () => {
      controls.start("animate");
   };

   return (
      <motion.div
         initial={{ x: "-110%" }}
         animate={{ x: 0, transition: { duration } }}
         exit={{ x: "100%", transition: { duration, delay: duration } }}
         onAnimationComplete={onAnimationComplete}
         className="flex flex-col relative"
      >
         <motion.div
            variants={innerCard}
            animate={controls}
            className="top-0 left-0 absolute w-full h-full bg-tertiary z-10"
         ></motion.div>
         <motion.div
            initial={{ x: "-105%" }}
            exit={{ x: 0, transition: { duration } }}
            className="top-0 left-0 absolute w-full h-full bg-tertiary z-10"
         ></motion.div>
         {children}
      </motion.div>
   );
}
