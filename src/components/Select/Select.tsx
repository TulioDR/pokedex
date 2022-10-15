import { useRouter } from "next/router";
import { useEffect, useState } from "react";
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
      if (order === "last-to-first") setSelected("Last to First");
      else if (order === "a-z") setSelected("A-Z");
      else if (order === "z-a") setSelected("Z-A");
      else setSelected("First to Last");
   }, [router.query.order]);

   return (
      <div className="w-full text-white relative z-10">
         <button
            onClick={toggle}
            className="w-full h-10 bg-primary rounded-lg flex items-center pl-4 cursor-pointer"
         >
            {selected}
         </button>
         {isOpen && (
            <ul className="w-full rounded-lg bg-primary mt-2 absolute top-full shadow-lg pb-3">
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