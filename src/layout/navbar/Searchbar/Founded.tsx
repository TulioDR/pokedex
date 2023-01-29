import { motion } from "framer-motion";

type Props = {
   onClick: (e: any) => void;
   children: string;
   cursor: number;
   index: number;
   setCursor: React.Dispatch<React.SetStateAction<number>>;
};

export default function Founded({
   onClick,
   setCursor,
   cursor,
   index,
   children,
}: Props) {
   const handleMouseEnter = () => {
      setCursor(index);
   };

   return (
      <motion.li
         onClick={onClick}
         onHoverStart={handleMouseEnter}
         className={`text-black px-5 h-10 cursor-pointer flex items-center capitalize ${
            cursor === index ? "bg-gray-300 selected" : ""
         }`}
      >
         {children}
      </motion.li>
   );
}
