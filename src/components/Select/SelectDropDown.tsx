import React from "react";

type Props = {
   selected: string;
   isOpen: boolean;
};

export default function SelectDropDown({ selected, isOpen }: Props) {
   return (
      <button className="w-full group h-10 bg-primary rounded-lg flex items-center justify-between pl-4 cursor-pointer overflow-hidden">
         <div>{selected}</div>
         <div className="group-hover:bg-black h-full w-10">
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
