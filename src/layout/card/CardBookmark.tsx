import { AnimatePresence, motion } from "framer-motion";

type Props = {
   isBoxOpen: boolean;
   isSaved: boolean;
};

export default function CardBookmark({ isBoxOpen, isSaved }: Props) {
   return (
      <AnimatePresence>
         {isBoxOpen && (
            <motion.div
               initial={{ y: "-100%" }}
               animate={{ y: 0 }}
               exit={{ y: "-100%" }}
               transition={{ duration: 0.2 }}
               className="absolute -top-3 right-6 text-tertiary overflow-hidden"
            >
               <span className="material-icons text-5xl">
                  {isSaved ? "bookmark" : "bookmark_border"}
               </span>
            </motion.div>
         )}
      </AnimatePresence>
   );
}
