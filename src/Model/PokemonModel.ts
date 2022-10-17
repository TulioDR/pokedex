export type ImageModel = {
   smallImg: string;
   hdImg: string;
};

export type StatsModel = {
   base_stat: number;
   stat: { name: string };
}[];
export type DetailsModel = {
   height: number;
   weight: number;
   gender: number;
   generation: string;
   abilities: {
      name: string;
      description: string;
   };
};
export type TypesModel = {
   slot: number;
   type: { name: string };
}[];
export type SpeciesModel = { name: string }[];

export interface PokemonCardModel {
   id: number;
   name: string;
   img: string;
   types: {
      slot: number;
      type: { name: string };
   }[];
}

export default interface PokemonModel {
   name: string;
   image: ImageModel;
   types: TypesModel;
   stats: StatsModel;
   description: string;
   details: DetailsModel;
   species: SpeciesModel;
   evolution: PokemonCardModel[] | null;
}
