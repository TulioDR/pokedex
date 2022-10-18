import { motion } from "framer-motion";

type Props = {
   onClick: () => void;
};

export default function ShuffleBtn({ onClick }: Props) {
   return (
      <motion.button
         whileTap={{ scale: 0.9 }}
         onTap={onClick}
         className="w-full h-10 bg-secondary space-x-2 flex items-center justify-center text-white rounded-lg"
      >
         <span className="material-icons">shuffle</span>
         <span className="text-lg">Surprise Me!</span>
      </motion.button>
   );
}
