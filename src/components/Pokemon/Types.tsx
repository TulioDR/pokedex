type Props = {
   types: {
      slot: number;
      type: { name: string };
   }[];
};

export default function Types({ types }: Props) {
   return (
      <section className=" bg-gray-600 rounded-md p-4 mt-3 md:mt-0">
         <h2 className="text-xl mb-2 text-white">Type</h2>
         <div className="grid grid-cols-2 gap-2 text-white">
            {types.map((type) => (
               <div
                  key={type.slot}
                  className={`rounded-md capitalize py-1 text-center bg-blue-500`}
               >
                  {type.type.name}
               </div>
            ))}
         </div>
      </section>
   );
}
