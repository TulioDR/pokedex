const getData = async (url: string) => {
   const res = await fetch(url);
   return await res.json();
};
const getEvolutionStage = async (url: string) => {
   const id = url.substring(42).slice(0, -1); // get the id from the end of the url
   const data = await getData(`https://pokeapi.co/api/v2/pokemon/${id}/`);
   return {
      id: data.id,
      name: data.name,
      img: data.sprites.other["official-artwork"].front_default,
      types: data.types,
   };
};

export const getEvolutionChain = async (evolutionChain: any) => {
   if (!evolutionChain) return null;
   const evolution = await getData(evolutionChain.url);
   const data = evolution.chain;
   // console.log(data);
   const stages = {
      firstStage: await getEvolutionStage(data.species.url),
      nextStages: await Promise.all(
         data.evolves_to.map(async (pok: any) => {
            return {
               secondStage: await getEvolutionStage(pok.species.url),
               thirdStage: await Promise.all(
                  pok.evolves_to.map(async (newPok: any) => {
                     return await getEvolutionStage(newPok.species.url);
                  })
               ),
            };
         })
      ),
   };
   return stages;
};
