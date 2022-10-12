import { motion } from "framer-motion";

type Props = {
   ability: {
      name: string;
      description: string;
   };
   setAbilitiesInfo: React.Dispatch<any>;
};

export default function Ability({ ability, setAbilitiesInfo }: Props) {
   return (
      <motion.div
         initial={{ y: "100%" }}
         animate={{ y: 0 }}
         exit={{ y: "100%" }}
         transition={{ duration: 0.3 }}
         className="absolute w-full h-full top-0 left-0 bg-gray-700 p-5"
      >
         <button
            onClick={() => setAbilitiesInfo(null)}
            className="flex items-center space-x-1 absolute top-0 right-0 bg-black p-3 rounded-bl-lg"
         >
            <span className="material-icons text-xl">close</span>
            <span>Close</span>
         </button>
         <div>
            <div className="text-gray-400 text-sm mb-3">Ability Info</div>
            <div className="text-white text-xl capitalize">{ability.name}</div>
            <div className="text-white">{ability.description}</div>
         </div>
      </motion.div>
   );
}
