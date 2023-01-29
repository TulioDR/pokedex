import { motion } from "framer-motion";
type Props = {
   back?: boolean;
   onClick?: () => void;
};

export default function BackBtn({ back, onClick }: Props) {
   return (
      <div className="overflow-hidden">
         <motion.button
            initial={{ y: "100%" }}
            animate={{ y: 0 }}
            exit={{ y: "100%" }}
            transition={{ duration: 0.3 }}
            onClick={back ? onClick : undefined}
            className={`${back ? "text-xl" : "text-2xl"}`}
         >
            {back ? "Go back" : "Pokédex"}
         </motion.button>
      </div>
   );
}
