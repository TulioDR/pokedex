import { motion } from "framer-motion";
import VerticalAnimation from "../animations/VerticalAnimation";

type Props = {
   onClick: () => void;
};

export default function ShuffleBtn({ onClick }: Props) {
   return (
      <VerticalAnimation>
         <motion.button
            whileTap={{ scale: 0.9 }}
            onTap={onClick}
            className="w-80 h-12 bg-gradient-to-r from-secondary to-blue-600 space-x-2 flex items-center justify-center text-white rounded-lg relative"
         >
            <span className="material-icons">shuffle</span>
            <span className="text-lg font-medium">Surprise Me!</span>
         </motion.button>
      </VerticalAnimation>
   );
}
