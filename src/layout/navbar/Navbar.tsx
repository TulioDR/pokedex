import { AnimatePresence } from "framer-motion";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import BackBtn from "./BackBtn";
import NavbarContainer from "./NavbarContainer";
import SearchBar from "./Searchbar/SearchBar";

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
         <AnimatePresence mode="wait">
            <div key={router.route} className="flex items-center">
               {showTitle ? <BackBtn /> : <BackBtn back onClick={goBack} />}
            </div>
         </AnimatePresence>

         <SearchBar />
      </NavbarContainer>
   );
}
