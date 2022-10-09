type Props = {
   children: React.ReactNode;
};

export default function Container({ children }: Props) {
   return <div className="w-full lg:w-[940px] mx-auto">{children}</div>;
}
