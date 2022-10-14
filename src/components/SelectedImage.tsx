import Container from "./Container";
import { motion } from "framer-motion";
import Image from "next/image";

type Props = {
   selectedId: string;
   setSelectedId: any;
};

export default function SelectedImage({ selectedId, setSelectedId }: Props) {
   return (
      <div className="fixed top-16 left-0 w-full z-10">
         <Container>
            <div className="p-5 grid sm:grid-cols-2 gap-7 w-full">
               <motion.div
                  onClick={() => setSelectedId(null)}
                  layoutId={selectedId}
                  className="relative w-full aspect-square shadow-xl rounded-xl overflow-hidden"
                  transition={{ duration: 0.3 }}
               >
                  <Image
                     src={selectedId}
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
