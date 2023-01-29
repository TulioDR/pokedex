import { useRouter } from "next/router";
import { useEffect, useState } from "react";

type Props = {
   children: React.ReactNode;
   order: string;
};

export default function SelectOption({ children, order }: Props) {
   const router = useRouter();

   const handleClick = () => {
      router.push({ query: { ...router.query, order: order } });
   };

   const [selected, setSelected] = useState<boolean>(false);
   useEffect(() => {
      if (router.query.order === order) {
         setSelected(true);
      } else if (router.query.order === undefined && order === "first-last") {
         setSelected(true);
      } else {
         setSelected(false);
      }
   }, [router.query.order, order]);
   return (
      <li
         onClick={handleClick}
         className={`h-10 flex items-center px-5 hover:bg-gray-600 cursor-pointer ${
            selected ? "bg-gray-600 pointer-events-none" : ""
         }`}
      >
         {children}
      </li>
   );
}
