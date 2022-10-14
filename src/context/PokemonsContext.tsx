import { createContext, useContext, useEffect, useState } from "react";

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
         const url = "https://pokeapi.co/api/v2/pokemon?limit=898";
         const res = await fetch(url);
         const data = await res.json();
         console.log("all pokemons obtained");
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
