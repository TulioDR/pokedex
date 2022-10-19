import React, { useState, createContext, useContext } from "react";

interface AppContextInterface {
   selectedImg: null | string;
   setSelectedImg: React.Dispatch<React.SetStateAction<string | null>>;
}
type Props = {
   children: React.ReactNode;
};
const AnimationContext = createContext({} as AppContextInterface);
export default function useAnimationContext() {
   return useContext(AnimationContext);
}
export function AnimationProvider({ children }: Props) {
   const [selectedImg, setSelectedImg] = useState<null | string>(null);

   const value: AppContextInterface = {
      selectedImg,
      setSelectedImg,
   };

   return (
      <AnimationContext.Provider value={value}>
         {children}
      </AnimationContext.Provider>
   );
}
