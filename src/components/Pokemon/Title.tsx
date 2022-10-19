import VerticalAnimation from "../../animations/VerticalAnimation";

type Props = {
   children: React.ReactNode;
};

export default function Title({ children }: Props) {
   return (
      <VerticalAnimation>
         <div className="text-center font-semibold capitalize text-5xl pb-2 mb-7">
            {children}
         </div>
      </VerticalAnimation>
   );
}
