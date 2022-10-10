import { motion } from "framer-motion";
import Image from "next/image";
import { ImageModel } from "../../Model/PokemonModel";

type Props = {
   image: ImageModel;
};

export default function PokeImg({ image }: Props) {
   return (
      <div className="relative aspect-square bg-white rounded-lg shadow-lg">
         <Image src={image.smallImg} layout="fill" priority />
         <motion.div
            initial={{ height: 0 }}
            animate={{ height: "100%", transition: { duration: 0.5 } }}
            className="absolute w-full h-full top-0 left-0 bg-white overflow-hidden rounded-lg"
         >
            <div className="absolute w-full h-full aspect-square top-0 left-0">
               <div className="w-full aspect-square relative origin-bottom">
                  <Image src={image.hdImg} layout="fill" priority />
               </div>
            </div>
         </motion.div>
      </div>
   );
}
