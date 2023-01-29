type Props = {
   onChange: (e: React.FormEvent<HTMLInputElement>) => void;
   onFocus: () => void;
   value: string;
};

export default function Input({ onChange, onFocus, value }: Props) {
   return (
      <div className="flex-1">
         <input
            type="text"
            placeholder="Search for a Pokémon"
            className="bg-white text-black text-sm sm:text-base rounded-lg h-full w-full outline-none px-5 capitalize"
            onChange={onChange}
            onFocus={onFocus}
            value={value}
         />
      </div>
   );
}
