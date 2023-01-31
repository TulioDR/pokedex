import "../styles/globals.css";
import type { AppProps } from "next/app";
import Navbar from "../layout/navbar/Navbar";
import Container from "../components/Container";
import { AnimatePresence, motion } from "framer-motion";
import { PokemonsProvider } from "../context/PokemonsContext";
import { useRouter } from "next/router";

function MyApp({ Component, pageProps }: AppProps) {
   const router = useRouter();
   return (
      <div className="bg-gradient-to-tr from-[#141e30] to-[#243b55] bg-fixed">
         <PokemonsProvider>
            <Navbar />
            <Container>
               <div className="w-full min-h-screen pb-7">
                  <AnimatePresence mode="wait">
                     <motion.div key={router.pathname}>
                        <Component {...pageProps} />
                     </motion.div>
                  </AnimatePresence>
               </div>
            </Container>
         </PokemonsProvider>
      </div>
   );
}

export default MyApp;
