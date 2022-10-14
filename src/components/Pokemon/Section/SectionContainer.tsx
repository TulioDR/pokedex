import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import ExitCardAnimation from "../../../animations/ExitCardAnimation";
import RevealCardAnimation from "../../../animations/RevealCardAnimation";

type Props = {
   children: React.ReactNode;
   details?: boolean;
   species?: boolean;
};

export default function SectionContainer({
   children,
   details,
   species,
}: Props) {
   const [background, setBackground] = useState<string>("");

   useEffect(() => {
      let gradient: string = "";
      if (details) gradient = "from-blue-500 to-blue-800";
      else if (species) gradient = "from-orange-600 to-orange-800";
      else gradient = "from-primary to-primary";
      setBackground(gradient);
   }, [details, species]);

   return (
      <motion.div className={`w-full overflow-hidden`}>
         <motion.div
            initial={{ x: "-100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ duration: 0.3 }}
            className={`p-5 bg-gradient-to-br ${background} rounded-lg text-white relative`}
         >
            {children}
            <ExitCardAnimation />
            <RevealCardAnimation />
         </motion.div>
      </motion.div>
   );
}
