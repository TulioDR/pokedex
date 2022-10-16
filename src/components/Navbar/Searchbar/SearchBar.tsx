import { Router, useRouter } from "next/router";
import React, { useRef, useState } from "react";
import usePokemonsContext from "../../../context/PokemonsContext";

type Props = {};

export default function SearchBar({}: Props) {
   const { allPokemons } = usePokemonsContext();

   const [isOpen, setIsOpen] = useState<boolean>(false);
   const [inputValue, setInputValue] = useState<string>("");
   const [foundedPokemons, setFoundedPokemons] = useState<any[]>([]);

   const toggle = () => {
      router.push({ query: { ...router.query, search: inputValue } });
      setIsOpen(false);
   };

   const filterPokemons = (allPokemons: any[], value: any) => {
      return allPokemons.filter((pokemon) => {
         return pokemon.name.includes(value.toLowerCase());
      });
   };

   const foundedContainer = useRef<HTMLUListElement>(null);
   const handleInputFocus = () => {
      if (inputValue) setIsOpen(true);
   };
   const handleInputBlur = (e: any) => {
      if (e.relatedTarget !== foundedContainer.current) setIsOpen(false);
   };

   const handleInputChange = (e: any) => {
      const value = e.target.value;
      setInputValue(value);
      const founded = filterPokemons(allPokemons, value);
      setFoundedPokemons(founded);
      if (value) setIsOpen(true);
      else setIsOpen(false);
   };

   const router = useRouter();
   const fillInput = (e: any) => {
      console.log("fill this");
      const value = e.target.innerText;
      setInputValue(value);
      const founded = filterPokemons(allPokemons, value);
      setFoundedPokemons(founded);
      router.push({ query: { ...router.query, search: value } });
      setIsOpen(false);
   };

   const handleSubmit = (e: any) => {
      e.preventDefault();
      router.push({ query: { ...router.query, search: inputValue } });
      setIsOpen(false);
   };

   return (
      <div className="h-10 w-full flex relative">
         <form onSubmit={handleSubmit} className="flex space-x-3 w-full">
            <div className="flex-1">
               <input
                  type="text"
                  className="bg-white text-black rounded-lg h-full w-full outline-none px-5"
                  onChange={handleInputChange}
                  onFocus={handleInputFocus}
                  onBlur={handleInputBlur}
                  value={inputValue}
               />
            </div>
            <button
               onClick={toggle}
               className="h-10 w-10 rounded-lg bg-tertiary grid place-content-center"
            >
               <span className="material-icons">search</span>
            </button>
         </form>

         {isOpen && (
            <ul
               tabIndex={0}
               ref={foundedContainer}
               className="absolute w-full top-full left-0 bg-white max-h-96 overflow-y-auto rounded-lg shadow-lg mt-2"
            >
               {foundedPokemons.map((pokemon, index) => (
                  <li
                     key={index}
                     onClick={fillInput}
                     className="text-black hover:bg-gray-300 px-5 h-10 cursor-pointer flex items-center capitalize"
                  >
                     {pokemon.name}
                  </li>
               ))}
            </ul>
         )}
      </div>
   );
}
