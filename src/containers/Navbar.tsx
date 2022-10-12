import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import Container from "../components/Container";

type Props = {};

export default function Navbar({}: Props) {
   const router = useRouter();
   const [showTitle, setShowTitle] = useState<boolean>(false);
   useEffect(() => {
      if (router.route === "/") setShowTitle(true);
      else setShowTitle(false);
   }, [router.route]);

   const goBack = () => {
      router.push("/");
   };
   return (
      <div className="w-full bg-primary text-white sticky top-0 z-30">
         <Container>
            <div className="w-full h-16 flex items-center">
               {showTitle ? (
                  "Pokedex"
               ) : (
                  <button onClick={goBack}>Go back</button>
               )}
            </div>
         </Container>
      </div>
   );
}
