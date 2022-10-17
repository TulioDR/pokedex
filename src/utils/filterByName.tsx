export default function filterByName(allPokemons: any[], name: string) {
   if (name) {
      return allPokemons.filter((pokemon) => {
         return pokemon.name.includes(name.toLowerCase());
      });
   }
   return allPokemons;
}
