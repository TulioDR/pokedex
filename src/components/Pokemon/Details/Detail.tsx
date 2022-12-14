type Props = {
   label: string;
   info: JSX.Element | string;
   abilities?: boolean;
};

export default function Detail({ label, info, abilities }: Props) {
   return (
      <div className={`${abilities ? "row-span-2" : ""}`}>
         <div className="text-white capitalize truncate">{label}</div>
         <div className="text-black truncate">{info}</div>
      </div>
   );
}
