export default function filterByName(allPokemons: any[], name: string) {
   return allPokemons.filter((pokemon) => {
      return pokemon.name.includes(name.toLowerCase());
   });
}
