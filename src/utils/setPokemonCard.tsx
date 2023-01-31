import { PokemonCardModel } from "../Model/PokemonModel";

export default function setPokemonCard(PokemonData: any) {
   const { name, sprites, id, types, species } = PokemonData;
   const card: PokemonCardModel = {
      id: id,
      name: name,
      img: sprites.other["official-artwork"].front_default,
      types: types,
      species: species,
   };
   return card;
}
