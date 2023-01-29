import { motion, useAnimation } from "framer-motion";

type Props = {
   onClick: () => void;
   children: React.ReactNode;
};

export default function CardContainer({ onClick, children }: Props) {
   const duration = 0.3;

   const innerCard = {
      animate: { x: "100%", transition: { duration } },
   };

   const controls = useAnimation();
   const onAnimationComplete = () => {
      controls.start("animate");
   };
   // const onAnimationEnd = () => {
   //    console.log("exited");
   // };
   return (
      <motion.article
         whileHover={{ y: -8, transition: { duration } }}
         onClick={onClick}
         className="cursor-pointer relative w-full overflow-hidden"
      >
         <motion.div
            initial={{ x: "-100%" }}
            animate={{ x: 0, transition: { duration } }}
            exit={{ x: "100%", transition: { duration, delay: duration } }}
            onAnimationComplete={onAnimationComplete}
            className="flex flex-col relative"
         >
            <motion.div
               variants={innerCard}
               animate={controls}
               className="top-0 left-0 absolute w-full h-full bg-secondary z-10"
            ></motion.div>
            <motion.div
               initial={{ x: "-100%" }}
               exit={{ x: 0, transition: { duration } }}
               // onAnimationComplete={onAnimationEnd}
               className="top-0 left-0 absolute w-full h-full bg-secondary z-10"
            ></motion.div>
            {children}
         </motion.div>
      </motion.article>
   );
}
