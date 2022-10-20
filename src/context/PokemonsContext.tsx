import { createContext, useContext, useEffect, useState } from "react";
import fetchData from "../utils/fetchData";

interface AppContextInterface {
   allPokemons: any[];
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

   useEffect(() => {
      const getAllPokemons = async () => {
         const url = "https://pokeapi.co/api/v2/pokemon?limit=905";
         const data = await fetchData(url);
         setAllPokemons(data.results);
      };
      getAllPokemons();
   }, []);

   const value: AppContextInterface = {
      allPokemons,
   };

   return (
      <PokemonContext.Provider value={value}>
         {children}
      </PokemonContext.Provider>
   );
}
