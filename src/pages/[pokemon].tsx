import Head from "next/head";
import Image from "next/image";
import { motion } from "framer-motion";

type Props = {
   pokemon: any;
};

export async function getServerSideProps({ query }: any) {
   const link = `https://pokeapi.co/api/v2/pokemon/${query.pokemon}`;
   const res = await fetch(link);
   const data = await res.json();
   return {
      props: { pokemon: data },
   };
}

export default function Pokemon({ pokemon }: Props) {
   console.log(pokemon);
   return (
      <>
         <Head>
            <title>{pokemon.name}</title>
            <meta name="description" content="Generated by create next app" />
            <link rel="icon" href="/favicon.ico" />
         </Head>
         <div className="grid md:grid-cols-2 gap-5 p-7 min-h-screen sm:w-4/5 xl:w-2/3 mx-auto bg-gray-200">
            <motion.div
               exit={{
                  y: 40,
                  opacity: 0,
                  transition: { duration: 0.3 },
               }}
               className="relative aspect-square bg-white rounded-lg shadow-lg"
            >
               <Image
                  src={pokemon.sprites.front_default}
                  layout="fill"
                  priority
               />
            </motion.div>
         </div>
      </>
   );
}