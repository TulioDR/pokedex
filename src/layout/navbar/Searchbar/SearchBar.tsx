import { useRouter } from "next/router";
import React, { useEffect, useRef, useState } from "react";
import usePokemonsContext from "../../../context/PokemonsContext";
import filterByName from "../../../utils/filterByName";
import Founded from "./Founded";
import FoundedContainer from "./FoundedContainer";
import Input from "./Input";

type Props = {};

export default function SearchBar({}: Props) {
   const { allPokemons } = usePokemonsContext();

   const router = useRouter();
   const [isOpen, setIsOpen] = useState<boolean>(false);
   const [inputValue, setInputValue] = useState<string>("");
   const [foundedPokemons, setFoundedPokemons] = useState<any[]>([]);

   const [cursor, setCursor] = useState<number>(-1);

   const foundedContainer = useRef<HTMLUListElement>(null);

   const handleKey = (e: KeyboardEvent) => {
      if (!isOpen) return;
      if (!foundedPokemons.length) return;
      if (e.key !== "ArrowUp" && e.key !== "ArrowDown") return;

      const arrowUp = e.key === "ArrowUp";
      const number1 = arrowUp ? foundedPokemons.length - 1 : 0;
      const number2 = arrowUp ? -1 : 1;
      const conditional = arrowUp
         ? cursor === 0
         : cursor === foundedPokemons.length - 1;

      if (conditional) {
         setCursor(number1);
         setInputValue(foundedPokemons[number1].name);
      } else {
         setCursor((current) => current + number2);
         setInputValue(foundedPokemons[cursor + number2].name);
      }
   };

   useEffect(() => {
      document.addEventListener("keyup", handleKey);
      return () => {
         document.removeEventListener("keyup", handleKey);
      };
   });

   const handleInputFocus = () => {
      if (inputValue) setIsOpen(true);
   };
   const handleInputBlur = (e: React.FocusEvent) => {
      if (e.relatedTarget !== foundedContainer.current) {
         setIsOpen(false);
         setCursor(-1);
      }
   };

   const handleInputChange = (e: React.FormEvent<HTMLInputElement>) => {
      const value = e.currentTarget.value;
      setInputValue(value);
      const founded = filterByName(allPokemons, value);
      setFoundedPokemons(founded.slice(0, 10));
      if (value && founded.length) setIsOpen(true);
      else setIsOpen(false);
   };

   const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
      e.preventDefault();
      if (inputValue) {
         router.push({ pathname: "/", query: { search: inputValue } });
      } else {
         router.push("/");
      }
      setIsOpen(false);
   };

   const fillInput = (e: React.SyntheticEvent) => {
      console.log("fill this");
      const value = e.currentTarget.textContent!;
      setInputValue(value);
      const founded = filterByName(allPokemons, value);
      setFoundedPokemons(founded.slice(0, 10));
      router.push({ pathname: "/", query: { search: value } });
      setIsOpen(false);
   };

   return (
      <div
         tabIndex={0}
         onBlur={handleInputBlur}
         className="h-10 w-80 flex relative bg-white rounded-full"
      >
         <form
            onSubmit={handleSubmit}
            className="flex items-center space-x-3 w-full px-5"
         >
            <Input
               onFocus={handleInputFocus}
               onChange={handleInputChange}
               value={inputValue}
            />
            <span className="material-icons !text-gray-500">search</span>
         </form>
         {isOpen && (
            <FoundedContainer elRef={foundedContainer}>
               {foundedPokemons.map((pokemon, index) => (
                  <Founded
                     key={index}
                     onClick={fillInput}
                     cursor={cursor}
                     setCursor={setCursor}
                     index={index}
                  >
                     {pokemon.name}
                  </Founded>
               ))}
            </FoundedContainer>
         )}
      </div>
   );
}
