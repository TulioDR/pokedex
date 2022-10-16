type Props = {
   elRef: React.RefObject<HTMLUListElement>;
   children: React.ReactNode;
};

export default function FoundedContainer({ elRef, children }: Props) {
   return (
      <ul
         tabIndex={0}
         ref={elRef}
         className="absolute w-full top-full left-0 bg-white max-h-96 overflow-y-auto rounded-lg shadow-lg mt-2"
      >
         {children}
      </ul>
   );
}
