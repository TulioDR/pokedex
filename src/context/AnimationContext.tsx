import React, { useState, createContext, useContext } from "react";

interface AppContextInterface {
   selectedId: null | string;
   setSelectedId: React.Dispatch<React.SetStateAction<string | null>>;
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

   const value: AppContextInterface = {
      selectedId,
      setSelectedId,
   };

   return (
      <AnimationContext.Provider value={value}>
         {children}
      </AnimationContext.Provider>
   );
}
