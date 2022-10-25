import { useRouter } from "next/router";
import { useEffect, useRef, useState } from "react";
import VerticalAnimation from "../../animations/VerticalAnimation";
import SelectOption from "./SelectOption";

type Props = {};

export default function Select({}: Props) {
   const router = useRouter();
   const [isOpen, setIsOpen] = useState<boolean>(false);
   const toggle = () => {
      setIsOpen(!isOpen);
   };

   const [selected, setSelected] = useState<string>("");
   useEffect(() => {
      const order = router.query.order;
      if (order === "last-first") setSelected("Last to First");
      else if (order === "a-z") setSelected("A-Z");
      else if (order === "z-a") setSelected("Z-A");
      else setSelected("First to Last");
   }, [router.query.order]);

   const optionsContainer = useRef<HTMLUListElement>(null);
   const handleBlur = (e: React.FocusEvent) => {
      if (e.relatedTarget !== optionsContainer.current) setIsOpen(false);
   };

   return (
      <div
         tabIndex={0}
         onBlur={handleBlur}
         onClick={toggle}
         className="w-full text-white relative z-10"
      >
         <VerticalAnimation>
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
         </VerticalAnimation>
         {isOpen && (
            <ul
               tabIndex={0}
               ref={optionsContainer}
               className="w-full rounded-lg bg-primary mt-2 absolute top-full shadow-lg pb-3"
            >
               <div className="w-full h-8 flex items-center px-5 text-sm text-gray-300">
                  Sort pokémons by...
               </div>
               <SelectOption order="first-last">First to Last</SelectOption>
               <SelectOption order="last-first">Last to First</SelectOption>
               <SelectOption order="a-z">A-Z</SelectOption>
               <SelectOption order="z-a">Z-A</SelectOption>
            </ul>
         )}
      </div>
   );
}
