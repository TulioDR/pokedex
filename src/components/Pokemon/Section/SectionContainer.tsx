import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import RenderAnimationContainer from "../../../animations/RenderAnimationContainer";

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
         <RenderAnimationContainer>
            <motion.div
               initial={{ x: "-100%" }}
               animate={{ x: 0 }}
               exit={{ x: "100%" }}
               transition={{ duration: 0.3 }}
               className={`p-5 bg-gradient-to-br ${background} rounded-lg text-white relative overflow-hidden`}
            >
               {children}
            </motion.div>
         </RenderAnimationContainer>
      </motion.div>
   );
}
