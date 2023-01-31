import threeDigits from "../../utils/threeDigits";

type Props = {
   id: number;
   evolution?: boolean;
};

export default function CardID({ id, evolution }: Props) {
   return (
      <div
         className={`text-sm ${evolution ? "text-gray-700" : "text-gray-300"}`}
      >
         N.º{threeDigits(id)}
      </div>
   );
}
