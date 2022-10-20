import { AnimatePresence, motion } from "framer-motion";
import { useRouter } from "next/router";
type Props = {
   children: React.ReactNode;
};

export default function DisplayedCardsContainer({ children }: Props) {
   const router = useRouter();

   return (
      <AnimatePresence mode="wait">
         <motion.div
            key={router.asPath}
            className="w-full grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 md:gap-7"
         >
            {children}
         </motion.div>
      </AnimatePresence>
   );
}
