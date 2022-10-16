import { PokemonCardModel } from "../Model/PokemonModel";

export const getData = async (url: string) => {
   const res = await fetch(url);
   return await res.json();
};

export const getPokemonsCards = async (sourceArray: any[], count: number) => {
   const pokemonsArray = sourceArray.slice(count, count + 20);
   const requestPromises = pokemonsArray.map((pokemon) => getData(pokemon.url));
   const data = await Promise.all(requestPromises);
   let PokemonCards: PokemonCardModel[] = [];
   data.map((poke: any) => {
      const { name, sprites, id, types } = poke;
      PokemonCards.push({
         id: id,
         name: name,
         // img: sprites.other["official-artwork"].front_default,
         img: sprites.front_default,
         types: types,
      });
   });
   return PokemonCards;
};
