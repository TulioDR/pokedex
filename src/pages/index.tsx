import { AnimatePresence, motion } from "framer-motion";
import type { NextPage } from "next";
import Head from "next/head";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import FavoritesBox from "../components/favoritesBox/FavoritesBox";
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

   const [isBoxOpen, setIsBoxOpen] = useState<boolean>(false);
   const toggle = () => setIsBoxOpen(!isBoxOpen);

   const [savedCards, setSavedCards] = useState<any[]>([]);
   const [selectedCard, setSelectedCard] = useState<any | null>(null);
   const [mouseInsideBox, setMouseInsideBox] = useState<boolean>(false);

   useEffect(() => {
      console.log("a card was saved");
   }, [savedCards]);

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
         <div className="flex justify-between">
            <div className="flex flex-col">
               <div
                  className={`mb-7 ${
                     isBoxOpen
                        ? "space-y-3 lg:space-y-0 lg:flex justify-between"
                        : "flex justify-between"
                  }`}
               >
                  <ShuffleBtn onClick={randomize} />
                  <Select />
               </div>
               <AnimatePresence mode="wait">
                  <motion.div key={`${router.asPath}${refreshRandom}`}>
                     <Cards
                        isBoxOpen={isBoxOpen}
                        mouseInsideBox={mouseInsideBox}
                        setSavedCards={setSavedCards}
                        savedCards={savedCards}
                     />
                  </motion.div>
               </AnimatePresence>
            </div>
            <FavoritesBox
               savedCards={savedCards}
               isBoxOpen={isBoxOpen}
               setMouseInsideBox={setMouseInsideBox}
            />
         </div>
         <button
            onClick={toggle}
            className="fixed bg-tertiary text-white h-12 top-1/2 -translate-y-1/2 right-0 aspect-square rounded-l-lg grid place-content-center"
         >
            <span className="material-icons">bookmarks</span>
         </button>
      </>
   );
};

export default Home;
