type Props = {
   children: React.ReactNode;
};

export default function SectionTitle({ children }: Props) {
   return <div className="text-white text-2xl mb-3">{children}</div>;
}
