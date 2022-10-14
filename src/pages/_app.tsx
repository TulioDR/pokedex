import "../styles/globals.css";
import type { AppProps } from "next/app";
import Navbar from "../containers/Navbar";
import { AnimatePresence, motion } from "framer-motion";
import { useRouter } from "next/router";
import { AnimationProvider } from "../context/AnimationContext";
import Container from "../components/Container";
import { PokemonsProvider } from "../context/PokemonsContext";

function MyApp({ Component, pageProps }: AppProps) {
   const router = useRouter();
   return (
      <AnimationProvider>
         <PokemonsProvider>
            <AnimatePresence mode="wait">
               <motion.div key={router.route} className="w-full bg-black">
                  <Navbar />
                  <Container>
                     <div className="w-full bg-gray-300 p-5 sm:p-7 min-h-screen">
                        <Component {...pageProps} />
                     </div>
                  </Container>
               </motion.div>
            </AnimatePresence>
         </PokemonsProvider>
      </AnimationProvider>
   );
}

export default MyApp;
