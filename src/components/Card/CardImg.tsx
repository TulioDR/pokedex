import { motion } from "framer-motion";
import Image from "next/image";
import { useState } from "react";

type Props = {
   img: string;
   alt: string;
};

export default function CardImg({ img, alt }: Props) {
   const [isLoaded, setIsLoaded] = useState<boolean>(false);

   const isComplete = () => {
      setIsLoaded(true);
   };
   return (
      <motion.div
         layoutId={img}
         className="shadow-xl rounded-xl overflow-hidden mx-4 -mt-4 aspect-square relative"
      >
         <Image
            src={img}
            alt={alt}
            layout="fill"
            className="bg-white"
            onLoadingComplete={isComplete}
         />
         {!isLoaded && (
            <div className="w-full h-full absolute top-0 left-0 bg-white"></div>
         )}
      </motion.div>
   );
}
