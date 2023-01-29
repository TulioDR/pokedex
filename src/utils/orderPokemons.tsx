const orderAZ = (array: any[]) => {
   array.sort(function (a, b) {
      if (a.name > b.name) return 1;
      if (a.name < b.name) return -1;
      return 0;
   });
   return array;
};

export default function orderPokemons(sourceArray: any[], order: string) {
   if (order === "a-z") {
      return orderAZ([...sourceArray]);
   }
   if (order === "z-a") {
      return orderAZ([...sourceArray]).reverse();
   }
   if (order === "last-first") {
      return [...sourceArray].reverse();
   }
   if (order === "random") {
      return [...sourceArray].sort(() => Math.random() - 0.5);
   }
   return [...sourceArray];
}
