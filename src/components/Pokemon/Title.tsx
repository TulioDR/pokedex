import { motion } from "framer-motion";

type Props = {
   children: React.ReactNode;
};

export default function Title({ children }: Props) {
   return (
      <div className="overflow-hidden mb-5">
         <motion.div
            initial={{ y: "100%" }}
            animate={{ y: 0 }}
            // exit={{ y: "100%" }}
            transition={{ duration: 0.6 }}
            className="text-center font-semibold capitalize text-5xl mb-2"
         >
            {children}
         </motion.div>
      </div>
   );
}
