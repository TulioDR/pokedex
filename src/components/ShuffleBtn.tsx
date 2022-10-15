type Props = {};

export default function ShuffleBtn({}: Props) {
   return (
      <button className="w-full h-10 bg-secondary space-x-2 flex items-center justify-center text-white rounded-lg">
         <span className="material-icons">shuffle</span>
         <span className="text-lg">Surprise Me!</span>
      </button>
   );
}
