import Container from "./Container";
import { motion } from "framer-motion";
import Image from "next/image";
import useAnimationContext from "../context/AnimationContext";
import { useRouter } from "next/router";

type Props = {};

export default function SelectedImage({}: Props) {
   const { selectedId, setSelectedId, selectedImg, pokemonId } =
      useAnimationContext();

   const router = useRouter();

   const getPokemon = () => {
      router.push(`/${pokemonId}`, undefined, { scroll: false });
   };
   return (
      <div className="fixed top-16 left-0 w-full z-10">
         <Container>
            <div className="p-5 grid sm:grid-cols-2 gap-7 w-full mt-20">
               <motion.div
                  onClick={() => setSelectedId(null)}
                  layoutId={selectedId!}
                  className="relative w-full aspect-square shadow-xl rounded-xl overflow-hidden"
                  transition={{ duration: 0.4, ease: [0.645, 0.045, 0.355, 1] }}
                  onLayoutAnimationComplete={getPokemon}
               >
                  <Image
                     src={selectedImg!}
                     alt="layout id"
                     layout="fill"
                     className="bg-white"
                  />
               </motion.div>
            </div>
         </Container>
      </div>
   );
}
