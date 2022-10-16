import { useRouter } from "next/router";
import { createContext, useContext, useEffect, useState } from "react";
import filterByName from "../utils/filterByName";
import { getPokemonsCards } from "../utils/getPokemonsCards";
import orderPokemons from "../utils/orderPokemons";

interface AppContextInterface {
   allPokemons: any[];
   setPageCount: React.Dispatch<React.SetStateAction<number>>;
   nextPage: () => void;
   displayed: any[];
   getRandomPokemons: () => void;
}

type Props = {
   children: React.ReactNode;
};

const PokemonContext = createContext({} as AppContextInterface);
export default function usePokemonsContext() {
   return useContext(PokemonContext);
}

export function PokemonsProvider({ children }: Props) {
   const [allPokemons, setAllPokemons] = useState<any[]>([]);
   const [sourceFirstLast, setSourceFirstLast] = useState<any[]>([]);
   const [displayedSource, setDisplayedSource] = useState<any[]>([]);
   const [displayed, setDisplayed] = useState<any[]>([]);
   const [pageCount, setPageCount] = useState<number>(0);

   const nextPage = () => {
      setPageCount(pageCount + 20);
   };

   useEffect(() => {
      const getAllPokemons = async () => {
         const url = "https://pokeapi.co/api/v2/pokemon?limit=898";
         const res = await fetch(url);
         const data = await res.json();
         console.log("all pokemons obtained");
         setAllPokemons(data.results);
         setDisplayedSource(data.results);
         setSourceFirstLast(data.results);
      };
      getAllPokemons();
   }, []);

   useEffect(() => {
      const displayPokemons = async () => {
         const cards = await getPokemonsCards(displayedSource, pageCount);
         if (pageCount === 0) {
            setDisplayed(cards);
         } else {
            setDisplayed((oldCards: any) => oldCards.concat(cards));
         }
      };
      displayPokemons();
   }, [displayedSource, pageCount]);

   const router = useRouter();

   useEffect(() => {
      if (router.query.search) {
         const foundedPokemons = filterByName(
            allPokemons,
            router.query.search as string
         );
         setSourceFirstLast(foundedPokemons);
         setPageCount(0);
      }
   }, [router.query.search, allPokemons]);

   useEffect(() => {
      const orderedPokemons = orderPokemons(
         sourceFirstLast,
         router.query.order as string
      );
      setDisplayedSource(orderedPokemons);
      setPageCount(0);
   }, [router.query.order, sourceFirstLast]);

   const getRandomPokemons = () => {
      const random = [...allPokemons].sort(() => Math.random() - 0.5);
      setSourceFirstLast(allPokemons);
      setDisplayedSource(random);
      router.push({ query: {} });
   };

   const value: AppContextInterface = {
      allPokemons,
      setPageCount,
      nextPage,
      displayed,
      getRandomPokemons,
   };

   return (
      <PokemonContext.Provider value={value}>
         {children}
      </PokemonContext.Provider>
   );
}
