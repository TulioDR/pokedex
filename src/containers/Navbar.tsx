import { useRouter } from "next/router";
import { useEffect, useState } from "react";

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
      <div className="mx-auto w-full bg-gray-700 h-16 text-white sticky top-0 z-10">
         <div className="w-full sm:w-4/5 xl:w-2/3 mx-auto h-full flex items-center">
            {showTitle ? "Pokedex" : <button onClick={goBack}>Go back</button>}
         </div>
      </div>
   );
}
