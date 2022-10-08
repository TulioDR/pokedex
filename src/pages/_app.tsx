import "../styles/globals.css";
import type { AppProps } from "next/app";
import Navbar from "../containers/Navbar";
import { AnimatePresence, motion } from "framer-motion";
import { useRouter } from "next/router";

function MyApp({ Component, pageProps }: AppProps) {
   const router = useRouter();
   return (
      <AnimatePresence mode="wait">
         <motion.div key={router.route} className="w-full bg-black">
            <Navbar />
            <Component {...pageProps} />
         </motion.div>
      </AnimatePresence>
   );
}

export default MyApp;
