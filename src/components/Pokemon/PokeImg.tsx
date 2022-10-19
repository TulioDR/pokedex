import Image from "next/image";
import RenderAnimationContainer from "../../animations/RenderAnimationContainer";

type Props = {
   image: string;
};

export default function PokeImg({ image }: Props) {
   return (
      <div className="overflow-hidden">
         <RenderAnimationContainer>
            <div className="relative aspect-square bg-white rounded-lg shadow-lg">
               <Image src={image} alt="small" layout="fill" priority />
            </div>
         </RenderAnimationContainer>
      </div>
   );
}
