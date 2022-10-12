type Props = {
   children: React.ReactNode;
};

export default function SectionTitle({ children }: Props) {
   return <div className="text-2xl mb-3 capitalize">{children}</div>;
}
