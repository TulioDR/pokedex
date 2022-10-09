type Props = {
   species: any;
};

export default function Species({ species }: Props) {
   return (
      <section
         className={`bg-gradient-to-br from-orange-600 to-orange-800 rounded-lg p-4`}
      >
         <div className={`text-white text-lg mb-3`}>Species</div>
         {(
            <div className="grid grid-cols-2 gap-4">
               {species.egg_groups.map((group: any) => (
                  <div
                     key={group.name}
                     className={`text-black bg-gray-200 text-center rounded-md py-1 capitalize`}
                  >
                     {group.name}
                  </div>
               ))}
            </div>
         ) || (
            <div className={`text-white text-center rounded-full py-1`}>
               This pokemon don't belong to any known species
            </div>
         )}
      </section>
   );
}
