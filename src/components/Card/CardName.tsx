type Props = {
   children: React.ReactNode;
};

export default function CardName({ children }: Props) {
   return <div className="capitalize truncate text-lg">{children}</div>;
}
