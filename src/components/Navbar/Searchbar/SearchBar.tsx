import React, { useState } from "react";

type Props = {};

export default function SearchBar({}: Props) {
   const [isOpen, setIsOpen] = useState<boolean>(false);
   const toggle = () => {
      setIsOpen(!isOpen);
   };
   return (
      <div className="h-10 w-1/2 flex relative">
         <div className="flex space-x-3 w-full">
            <div className="flex-1">
               <input
                  type="text"
                  className="bg-white text-black rounded-lg h-full w-full"
               />
            </div>
            <button
               onClick={toggle}
               className="h-10 w-10 rounded-lg bg-tertiary grid place-content-center"
            >
               <span className="material-icons">search</span>
            </button>
         </div>
         {isOpen && (
            <div className="absolute w-full top-full left-0 bg-white h-40 max-h-80 rounded-lg shadow-lg mt-2"></div>
         )}
      </div>
   );
}
