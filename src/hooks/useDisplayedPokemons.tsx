import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import usePokemonsContext from "../context/PokemonsContext";
import { PokemonCardModel } from "../Model/PokemonModel";
import filterByName from "../utils/filterByName";
import { getPokemonsCards } from "../utils/getPokemonsCards";
import orderPokemons from "../utils/orderPokemons";

export default function useDisplayedPokemons() {
   const router = useRouter();
   const { allPokemons } = usePokemonsContext();

   const [displayedSource, setDisplayedSource] = useState<any[]>([]);
   const [displayed, setDisplayed] = useState<PokemonCardModel[]>([]);
   const [pageCount, setPageCount] = useState<number>(0);

   const [showBtn, setShowBtn] = useState<boolean>(true);
   const [isLoading, setIsLoading] = useState<boolean>(true);

   const nextPage = () => {
      setPageCount((pageCount) => pageCount + 20);
   };

   useEffect(() => {
      if (!allPokemons.length) return;
      const foundedPokemons = filterByName(
         allPokemons,
         router.query.search as string
      );
      const orderedPokemons = orderPokemons(
         foundedPokemons,
         router.query.order as string
      );
      setDisplayedSource(orderedPokemons);
   }, [allPokemons]);

   useEffect(() => {
      const displayPokemons = async () => {
         if (!allPokemons.length) return;
         if (!displayedSource.length) return;
         setIsLoading(true);
         try {
            const cards = await getPokemonsCards(displayedSource, pageCount);
            if (pageCount === 0) setDisplayed(cards);
            else setDisplayed((oldCards) => oldCards.concat(cards));
            setIsLoading(false);
         } catch (err) {
            console.log(err);
         }
      };
      displayPokemons();
   }, [allPokemons, displayedSource, pageCount]);

   useEffect(() => {
      if (pageCount + 20 >= displayedSource.length) setShowBtn(false);
      else setShowBtn(true);
   }, [pageCount, displayedSource]);

   return {
      displayed,
      nextPage,
      showBtn,
      isLoading,
   };
}
