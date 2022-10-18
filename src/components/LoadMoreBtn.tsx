import { motion } from "framer-motion";

type Props = {
   onClick: () => void;
};

export default function LoadMoreBtn({ onClick }: Props) {
   return (
      <motion.button
         onTap={onClick}
         whileTap={{ scale: 0.9 }}
         className="rounded-lg bg-tertiary py-3 px-5 mx-auto text-white mt-7 block shadow-lg"
      >
         Load More
      </motion.button>
   );
}
