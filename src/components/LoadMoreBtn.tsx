import { motion } from "framer-motion";
import { SpinnerCircular } from "spinners-react";

type Props = {
   onClick: () => void;
   isLoading: boolean;
};

export default function LoadMoreBtn({ onClick, isLoading }: Props) {
   return (
      <div className="h-12 w-full mt-7">
         {isLoading ? (
            <div className="h-full mx-auto flex items-center justify-center">
               <SpinnerCircular
                  size={48}
                  thickness={100}
                  speed={150}
                  color="#ea580c"
               />
            </div>
         ) : (
            <motion.button
               onTap={onClick}
               whileTap={{ scale: 0.9 }}
               className="rounded-lg bg-tertiary h-full flex items-center px-5 mx-auto text-white shadow-lg"
            >
               Load More
            </motion.button>
         )}
      </div>
   );
}
