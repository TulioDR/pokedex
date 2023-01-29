import { AnimatePresence, motion } from "framer-motion";
import type { NextPage } from "next";
import Head from "next/head";
import { useRouter } from "next/router";
import { useState } from "react";
import Select from "../components/Select/Select";
import ShuffleBtn from "../components/ShuffleBtn";
import Cards from "../containers/Cards";

const Home: NextPage = () => {
   const router = useRouter();
   const [refreshRandom, setRefreshRandom] = useState<boolean>(false);
   const refreshRandomize = () => setRefreshRandom(!refreshRandom);
   const randomize = () => {
      if (router.asPath === "/?order=random") refreshRandomize();
      else router.push("/?order=random");
   };

   return (
      <>
         <Head>
            <title>Pokédex</title>
            <meta
               name="description"
               content="Learn about you favorite Pokémon!"
            />
            <link rel="icon" href="/favicon.ico" />
         </Head>
         <div>
            <div className="grid md:grid-cols-2 gap-5 md:gap-7 mb-7">
               <ShuffleBtn onClick={randomize} />
               <Select />
            </div>
            <AnimatePresence mode="wait">
               <motion.div key={`${router.asPath}${refreshRandom}`}>
                  <Cards />
               </motion.div>
            </AnimatePresence>
         </div>
      </>
   );
};

export default Home;
