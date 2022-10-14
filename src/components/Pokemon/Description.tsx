import SectionContainer from "./Section/SectionContainer";
import SectionTitle from "./Section/SectionTitle";

type Props = {
   description: string;
};

export default function Description({ description }: Props) {
   return (
      <SectionContainer>
         <SectionTitle>Description</SectionTitle>
         <p className="text-lg">{description}</p>
      </SectionContainer>
   );
}
