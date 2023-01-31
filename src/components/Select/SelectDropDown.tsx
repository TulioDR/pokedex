import React from "react";

type Props = {
   selected: string;
   isOpen: boolean;
};

export default function SelectDropDown({ selected, isOpen }: Props) {
   return (
      <button className="w-full group h-12 bg-gradient-to-r from-tertiary to-orange-800 rounded-lg flex items-center justify-between pl-4 cursor-pointer overflow-hidden">
         <div className="text-lg font-medium">{selected}</div>
         <div className="group-hover:bg-orange-900 h-full aspect-square">
            <div
               className={`duration-300 h-full w-full flex items-center ${
                  isOpen ? "rotate-180" : ""
               }`}
            >
               <span className="material-icons text-4xl w-full">
                  expand_more
               </span>
            </div>
         </div>
      </button>
   );
}
