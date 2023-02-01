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
      <PokemonsProvider>
         <Navbar />
         <div className="w-full min-h-screen pb-7">
            <Container>
               <AnimatePresence mode="wait">
                  <motion.div key={router.pathname}>
                     <Component {...pageProps} />
                  </motion.div>
               </AnimatePresence>
            </Container>
         </div>
      </PokemonsProvider>
   );
}

export default MyApp;
