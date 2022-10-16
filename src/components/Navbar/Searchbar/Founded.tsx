type Props = {
   onClick: (e: any) => void;
   children: React.ReactNode;
};

export default function Founded({ onClick, children }: Props) {
   return (
      <li
         onClick={onClick}
         className="text-black hover:bg-gray-300 px-5 h-10 cursor-pointer flex items-center capitalize"
      >
         {children}
      </li>
   );
}
