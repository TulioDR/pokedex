import Head from "next/head";
import Image from "next/image";
import { useRouter } from "next/router";
import psyduck from "../assets/images/psyduck.png";
type Props = {};

export default function NotFound({}: Props) {
   const router = useRouter();
   const goToPokedex = () => {
      router.push("/");
   };

   return (
      <>
         <Head>
            <title>404</title>
            <meta name="description" content="404 not found" />
            <link rel="icon" href="/favicon.ico" />
         </Head>
         <div className="">
            <div className="md:flex md:px-10 mx-auto">
               <div className="md:w-1/2 flex flex-col justify-center">
                  <div className="text-4xl mb-3">Page not found</div>
                  <div className="mb-2">
                     Sorry but the page you are looking for is not here
                  </div>
                  <div className="bg-primary p-5 rounded-lg text-white space-y-2 text-sm md:text-base">
                     <div className="flex space-x-1">
                        <span>Try going back to the</span>
                        <span
                           className="underline cursor-pointer"
                           onClick={goToPokedex}
                        >
                           Pokedex
                        </span>
                     </div>
                     <div>Or search for a pokemon on the search bar!</div>
                  </div>
               </div>
               <div className="p-12 md:p-5 lg:p-0 md:w-1/2">
                  <Image
                     src={psyduck}
                     layout="responsive"
                     alt="psyduck"
                     priority
                  />
               </div>
            </div>
         </div>
      </>
   );
}
