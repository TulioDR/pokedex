import { createContext, useContext, useEffect, useState } from "react";
import { getPokemonsCards } from "../utils/getPokemonsCards";

interface AppContextInterface {
   allPokemons: any[];
   setPageCount: React.Dispatch<React.SetStateAction<number>>;
   nextPage: () => void;
   displayed: any[];
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

   const value: AppContextInterface = {
      allPokemons,
      setPageCount,
      nextPage,
      displayed,
   };

   return (
      <PokemonContext.Provider value={value}>
         {children}
      </PokemonContext.Provider>
   );
}
