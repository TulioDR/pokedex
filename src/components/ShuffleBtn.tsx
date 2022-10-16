import usePokemonsContext from "../context/PokemonsContext";

type Props = {};

export default function ShuffleBtn({}: Props) {
   const { getRandomPokemons } = usePokemonsContext();

   return (
      <button
         onClick={getRandomPokemons}
         className="w-full h-10 bg-secondary space-x-2 flex items-center justify-center text-white rounded-lg"
      >
         <span className="material-icons">shuffle</span>
         <span className="text-lg">Surprise Me!</span>
      </button>
   );
}
