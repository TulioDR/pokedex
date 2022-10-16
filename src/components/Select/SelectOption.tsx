import { useRouter } from "next/router";
import { useEffect, useState } from "react";

type Props = {
   children: React.ReactNode;
   order: string;
};

export default function SelectOption({ children, order }: Props) {
   const router = useRouter();

   const changeSearchType = () => {
      router.push({ query: { ...router.query, order: order } });
   };
   return (
      <li
         onClick={changeSearchType}
         className={`h-10 flex items-center px-5 hover:bg-gray-600 cursor-pointer ${
            router.query.order === order ? "bg-gray-600" : ""
         }`}
      >
         {children}
      </li>
   );
}
