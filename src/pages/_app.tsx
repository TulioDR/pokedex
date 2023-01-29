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
         <Container>
            <div className="w-full bg-gray-300 p-5 sm:p-7 min-h-screen">
               <AnimatePresence mode="wait">
                  <motion.div key={router.pathname}>
                     <Component {...pageProps} />
                  </motion.div>
               </AnimatePresence>
            </div>
         </Container>
      </PokemonsProvider>
   );
}

export default MyApp;
