import { motion } from "framer-motion";

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
         <motion.div
            initial={{ x: "-100%" }}
            animate={{
               x: 0,
               transition: {
                  duration: 0.4,
                  ease: [0.645, 0.045, 0.355, 1],
               },
            }}
            exit={{
               x: "100%",
               transition: {
                  duration: 0.4,
                  delay: 0.2,
                  ease: [0.645, 0.045, 0.355, 1],
               },
            }}
            className="flex flex-col relative"
         >
            {children}
         </motion.div>
      </motion.article>
   );
}
