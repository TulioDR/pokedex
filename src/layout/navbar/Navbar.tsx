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
      router.push("/", undefined, { scroll: true });
      // router.back();
   };
   return (
      <NavbarContainer>
         <div className="text-3xl font-semibold">Pokédex</div>

         <SearchBar />
      </NavbarContainer>
   );
}
