import React, { useState, createContext, useContext } from "react";

interface AppContextInterface {
   selectedId: null | string;
   setSelectedId: React.Dispatch<React.SetStateAction<string | null>>;
   selectedImg: null | string;
   setSelectedImg: React.Dispatch<React.SetStateAction<string | null>>;
   pokemonId: null | number;
   setPokemonId: React.Dispatch<React.SetStateAction<number | null>>;
}
type Props = {
   children: React.ReactNode;
};
const AnimationContext = createContext({} as AppContextInterface);
export default function useAnimationContext() {
   return useContext(AnimationContext);
}
export function AnimationProvider({ children }: Props) {
   const [selectedId, setSelectedId] = useState<null | string>(null);
   const [selectedImg, setSelectedImg] = useState<null | string>(null);
   const [pokemonId, setPokemonId] = useState<null | number>(null);

   const value: AppContextInterface = {
      selectedId,
      setSelectedId,
      selectedImg,
      setSelectedImg,
      pokemonId,
      setPokemonId,
   };

   return (
      <AnimationContext.Provider value={value}>
         {children}
      </AnimationContext.Provider>
   );
}
