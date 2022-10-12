import { useEffect, useState } from "react";

type Props = {
   children: React.ReactNode;
   details?: boolean;
   species?: boolean;
};

export default function SectionContainer({
   children,
   details,
   species,
}: Props) {
   const [background, setBackground] = useState<string>("");

   useEffect(() => {
      let gradient: string = "";
      if (details) gradient = "from-blue-500 to-blue-800";
      else if (species) gradient = "from-orange-600 to-orange-800";
      else gradient = "from-primary to-primary";
      setBackground(gradient);
   }, []);

   return (
      <div
         className={`p-5 bg-gradient-to-br ${background} rounded-lg shadow-lg text-white overflow-hidden relative`}
      >
         {children}
      </div>
   );
}
