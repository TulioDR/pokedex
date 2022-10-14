import { motion } from "framer-motion";
import Image from "next/image";

type Props = {
   img: string;
   alt: string;
};

export default function CardImg({ img, alt }: Props) {
   return (
      <motion.div
         layoutId={img}
         className="bg-white shadow-xl rounded-xl mx-4 -mt-4 aspect-square relative"
      >
         <Image src={img} alt={alt} layout="fill" priority />
      </motion.div>
   );
}
