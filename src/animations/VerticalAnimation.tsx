import { motion } from "framer-motion";

type Props = {
   children: React.ReactNode;
};

export default function VerticalAnimation({ children }: Props) {
   return (
      <div className="overflow-hidden">
         <motion.div
            initial={{ y: "150%" }}
            animate={{ y: 0 }}
            exit={{ y: "150%" }}
            transition={{ duration: 0.4, ease: [0.645, 0.045, 0.355, 1] }}
         >
            {children}
         </motion.div>
      </div>
   );
}
