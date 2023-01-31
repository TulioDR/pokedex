import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import Container from "../../components/Container";
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
      <div className="w-full text-white sticky top-0 z-30">
         <Container>
            <div className="w-full flex items-center justify-between py-4">
               <div className="text-3xl font-semibold">Pokédex</div>
               <SearchBar />
            </div>
         </Container>
      </div>
   );
}
