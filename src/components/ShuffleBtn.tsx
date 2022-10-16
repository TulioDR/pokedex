import { useRouter } from "next/router";

type Props = {};

export default function ShuffleBtn({}: Props) {
   const router = useRouter();
   const changeSearchType = () => {
      router.push({ query: { ...router.query, order: "random" } });
   };

   return (
      <button
         onClick={changeSearchType}
         className="w-full h-10 bg-secondary space-x-2 flex items-center justify-center text-white rounded-lg"
      >
         <span className="material-icons">shuffle</span>
         <span className="text-lg">Surprise Me!</span>
      </button>
   );
}
