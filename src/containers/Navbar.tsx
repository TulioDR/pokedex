import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import NavbarContainer from "../components/Navbar/NavbarContainer";
import SearchBar from "../components/Navbar/Searchbar/SearchBar";

type Props = {};

export default function Navbar({}: Props) {
   const router = useRouter();
   const [showTitle, setShowTitle] = useState<boolean>(false);
   useEffect(() => {
      if (router.route === "/") setShowTitle(true);
      else setShowTitle(false);
   }, [router.route]);

   const goBack = () => {
      router.push("/", undefined, { scroll: false });
   };
   return (
      <NavbarContainer>
         <div className="flex items-center">
            {showTitle ? (
               <div className="text-2xl">Pokedex</div>
            ) : (
               <div className="text-xl" onClick={goBack}>
                  Go back
               </div>
            )}
         </div>
         <SearchBar />
      </NavbarContainer>
   );
}
