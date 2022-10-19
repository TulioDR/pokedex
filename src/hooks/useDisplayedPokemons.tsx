import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import usePokemonsContext from "../context/PokemonsContext";
import { PokemonCardModel } from "../Model/PokemonModel";
import filterByName from "../utils/filterByName";
import { getPokemonsCards } from "../utils/getPokemonsCards";
import orderPokemons from "../utils/orderPokemons";

export default function useDisplayedPokemons() {
   const { allPokemons } = usePokemonsContext();

   const [sourceFirstLast, setSourceFirstLast] = useState<any[]>([]);
   const [displayedSource, setDisplayedSource] = useState<any[]>([]);
   const [displayed, setDisplayed] = useState<PokemonCardModel[]>([]);
   const [pageCount, setPageCount] = useState<number>(0);

   const [showBtn, setShowBtn] = useState<boolean>(true);
   const [isLoading, setIsLoading] = useState<boolean>(true);
   useEffect(() => {
      if (pageCount + 20 >= displayedSource.length) setShowBtn(false);
      else setShowBtn(true);
   }, [pageCount, displayedSource]);

   const router = useRouter();

   const nextPage = () => {
      setPageCount((pageCount) => pageCount + 20);
   };

   useEffect(() => {
      const displayPokemons = async () => {
         setIsLoading(true);
         const cards = await getPokemonsCards(displayedSource, pageCount);
         if (pageCount === 0) setDisplayed(cards);
         else setDisplayed((oldCards) => oldCards.concat(cards));
         setIsLoading(false);
      };
      displayPokemons();
   }, [displayedSource, pageCount]);

   useEffect(() => {
      const foundedPokemons = filterByName(
         allPokemons,
         router.query.search as string
      );
      setSourceFirstLast(foundedPokemons);
      setPageCount(0);
   }, [router.query.search, allPokemons]);

   useEffect(() => {
      const orderedPokemons = orderPokemons(
         sourceFirstLast,
         router.query.order as string
      );
      setDisplayedSource(orderedPokemons);
      setPageCount(0);
   }, [router.query.order, sourceFirstLast]);

   const getRandomPokemons = () => {
      const random = [...allPokemons].sort(() => Math.random() - 0.5);
      setSourceFirstLast(allPokemons);
      setDisplayedSource(random);
      router.push({ query: {} });
      setPageCount(0);
   };

   return {
      displayed,
      getRandomPokemons,
      nextPage,
      showBtn,
      isLoading,
   };
}
