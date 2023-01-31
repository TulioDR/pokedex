type Props = {
   children: React.ReactNode;
};

export default function Container({ children }: Props) {
   return (
      <div className="w-full sm:w-[540px] md:w-[720px] lg:w-[960px] xl:w-[1140px] mx-auto">
         {children}
      </div>
   );
}
