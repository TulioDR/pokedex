import { motion } from "framer-motion";
import Image from "next/image";
import { useState } from "react";
import { SpinnerCircularFixed } from "spinners-react";

type Props = {
   img: string;
   alt: string;
};

export default function CardImg({ img, alt }: Props) {
   const [isLoaded, setIsLoaded] = useState<boolean>(false);

   const onLoadingComplete = () => {
      setIsLoaded(true);
   };
   return (
      <motion.div
         layoutId={img}
         className="shadow-xl rounded-xl overflow-hidden mx-4 -mt-4 aspect-square relative pointer-events-none bg-white"
      >
         <Image
            src={img}
            alt={alt}
            layout="fill"
            onLoadingComplete={onLoadingComplete}
            priority
         />
         {!isLoaded && (
            <div className="w-full h-full absolute top-0 left-0 grid place-content-center">
               <SpinnerCircularFixed
                  size={70}
                  thickness={180}
                  speed={100}
                  color="#ea580c"
               />
            </div>
         )}
      </motion.div>
   );
}
