import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import CardID from "../../layout/card/CardID";
import CardImg from "../../layout/card/CardImg";
import CardName from "../../layout/card/CardName";
import CardTypes from "../../layout/card/CardTypes";
import { PokemonCardModel } from "../../Model/PokemonModel";

type Props = {
   pokemon: PokemonCardModel;
};

export default function FavoriteCard({ pokemon }: Props) {
   const [id, setId] = useState<string | undefined>(pokemon.name);
   useEffect(() => {}, []);
   return (
      <motion.div
         layoutId={id}
         className={`w-full shadow-xl rounded-xl flex flex-col ${pokemon.species.color.name}`}
      >
         <CardImg img={pokemon.img} alt={pokemon.name} />
         <div className="w-ful p-3 text-white">
            {/* <CardID id={pokemon.id} /> */}
            <CardName>{pokemon.name}</CardName>
            {/* <CardTypes types={pokemon.types} /> */}
         </div>
      </motion.div>
   );
}
