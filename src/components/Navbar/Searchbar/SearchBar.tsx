import { Router, useRouter } from "next/router";
import React, { useRef, useState } from "react";
import usePokemonsContext from "../../../context/PokemonsContext";
import filterByName from "../../../utils/filterByName";
import Founded from "./Founded";
import FoundedContainer from "./FoundedContainer";
import Input from "./Input";
import SubmitBtn from "./SubmitBtn";

type Props = {};

export default function SearchBar({}: Props) {
   const { allPokemons } = usePokemonsContext();

   const router = useRouter();
   const [isOpen, setIsOpen] = useState<boolean>(false);
   const [inputValue, setInputValue] = useState<string>("");
   const [foundedPokemons, setFoundedPokemons] = useState<any[]>([]);
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
      const founded = filterByName(allPokemons, value);
      setFoundedPokemons(founded);
      if (value) setIsOpen(true);
      else setIsOpen(false);
   };

   const fillInput = (e: any) => {
      const value = e.target.innerText;
      setInputValue(value);
      const founded = filterByName(allPokemons, value);
      setFoundedPokemons(founded);
      handleSubmit(e);
   };

   const handleSubmit = (e: any) => {
      e.preventDefault();
      router.push({ pathname: "/", query: { search: inputValue } });
      setIsOpen(false);
   };

   return (
      <div className="h-10 w-full flex relative">
         <form onSubmit={handleSubmit} className="flex space-x-3 w-full">
            <Input
               onChange={handleInputChange}
               onFocus={handleInputFocus}
               onBlur={handleInputBlur}
               value={inputValue}
            />
            <SubmitBtn />
         </form>
         {isOpen && (
            <FoundedContainer elRef={foundedContainer}>
               {foundedPokemons.map((pokemon, index) => (
                  <Founded onClick={fillInput} key={index}>
                     {pokemon.name}
                  </Founded>
               ))}
            </FoundedContainer>
         )}
      </div>
   );
}
